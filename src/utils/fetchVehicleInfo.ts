import { VehicleInfoProps } from "../../typings"
import { ASSET_URL, VEHICLE_ID, fetchDetails } from './API_URL'

const exclude = ['pickup', 'sedan', 'coupe']

export async function fetchVehicleInfo(vin: string): Promise<VehicleInfoProps | null> {
  const res = await fetch(`https://listings.vin/${vin}`)
  const { data } = await res.json()

  const vehicle = data?.vehicle
  const retail = data?.retailListing
  const wholesale = data?.wholesaleListing

  let price = Math.max(retail?.price || 0, wholesale?.price || 0)
  let mileage = Math.max(retail?.miles || 0, wholesale?.miles || 0)

  if (vehicle) {
    let year = vehicle?.year
    let make = vehicle?.make?.toLowerCase()
    let model = vehicle?.model?.toLowerCase()
    let color = vehicle?.exteriorColor?.toLowerCase()
    let productId = vehicle?.exteriorColor === 'white' ? '1' : '2' || '1'
    const filteredModel = exclude.filter((word: string) => model?.includes(word))

    model = model.replace(filteredModel, '').trim().replace(/\s+/g, ' ')

    const search = { year, make, model }
    const details = await fetchDetails(VEHICLE_ID(search))
    const vehicleId = details[0]?.id
    const assetInfo = { vehicleId, productId, color }
    const products = await fetchDetails(ASSET_URL(assetInfo))
    const formats = products?.products?.[0]?.productFormats.filter(
      (format: any) => format.angle === '032'
    )
    const image = formats?.[0]?.assets?.map((asset: any) => asset.url)[0]

    const vehicleInfo = {
      price,
      mileage,
      color,
      year,
      make,
      model,
      image,
      vin
    }

    return vehicleInfo as VehicleInfoProps
  }
  return null
}

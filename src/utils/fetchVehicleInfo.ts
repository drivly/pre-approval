import { VehicleInfoProps } from '../../typings'
import { ASSET_URL, VEHICLE_ID, fetchDetails } from './API_URL'

const exclude = ['pickup', 'sedan', 'coupe']

export async function fetchVehicleInfo(vin: string): Promise<VehicleInfoProps | null> {
  const res = await fetch(`https://stock.photos.vin/${vin}`).then((res) => res.json())
  console.log('res', res.stock)

  const vehicleInfo = res.stock

  return vehicleInfo as VehicleInfoProps
}
// const res = await fetch(`https://listings.vin/${vin}`).then((res) => res.json())
// const { data } = res

// const vehicle = data?.vehicle
// const retail = data?.retailListing
// const wholesale = data?.wholesaleListing

// let price = Math.max(retail?.price || 0, wholesale?.price || 0)
// let mileage = Math.max(retail?.miles || 0, wholesale?.miles || 0)

// if (vehicle) {
//   let year = vehicle?.year
//   let make = vehicle?.make?.toLowerCase()
//   const model = vehicle?.model?.toLowerCase()
//   let color = vehicle?.exteriorColor?.toLowerCase()
//   let productId = vehicle?.exteriorColor === 'white' ? '1' : '2' || '1'
//   let newModel = model
//   const filteredModel = exclude.filter((word: string) => newModel?.includes(word))

//   newModel = newModel.replace(filteredModel, '').trim().replace(/\s+/g, ' ')

//   const search = { year, make, model: newModel }
//   const vehicleId = await fetchDetails(VEHICLE_ID(search)).then((data) => data?.[0]?.id)

//   const assetInfo = { vehicleId, productId, color }
//   const products = await fetchDetails(ASSET_URL(assetInfo))
//   const formats = products?.products?.[0]?.productFormats.filter(
//     (format: any) => format.angle === '032'
//   )
//   const image = formats?.[0]?.assets?.map((asset: any) => asset.url)[0]

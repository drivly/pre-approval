import { VehicleInfoProps } from '../../typings'

export async function fetchVehicleInfo(vin: string): Promise<VehicleInfoProps | null> {
  const res = await fetch(`https://stock.photos.vin/${vin}`).then((res) => res.json())
  const vehicleInfo = res.stock

  return vehicleInfo as VehicleInfoProps
}

export function formatDate(date: string | Date | number | any): string {
  return new Date(date).toLocaleDateString('en-US', { timeZoneName: 'short' })
}

export function formatMiles(value: number | undefined) {
  if (!value) return ''
  const miles = value.toString().replace(/\D/g, '')
  const milesLength = miles.length
  if (milesLength > 7) return miles.slice(0, -1)

  if (milesLength < 4) return miles
  if (milesLength < 5) return miles.slice(0, 1) + ',' + miles.slice(1)
  if (milesLength < 6) return miles.slice(0, 2) + ',' + miles.slice(2)
  if (milesLength < 7) return miles.slice(0, 3) + ',' + miles.slice(3)
  if (milesLength < 8) return miles.slice(0, 1) + ',' + miles.slice(1, 4) + ',' + miles.slice(4)
}

export function formatMoney(value: number | undefined) {
  if (!value) return value
  const money = value.toString().replace(/\D/g, '')
  const moneyLength = money.length
  if (moneyLength > 7) return money.slice(0, -1)

  if (moneyLength < 4) return '$' + money
  if (moneyLength < 5) return '$' + money.slice(0, 1) + ',' + money.slice(1)
  if (moneyLength < 6) return '$' + money.slice(0, 2) + ',' + money.slice(2)
  if (moneyLength < 7) return '$' + money.slice(0, 3) + ',' + money.slice(3)
  if (moneyLength < 8)
    return '$' + money.slice(0, 1) + ',' + money.slice(1, 4) + ',' + money.slice(4)
}





// interface VehicleIdProps {
//   year: string
//   make: string
//   model: string
// }

// interface AssetUrlProps {
//   vehicleId: string
//   productId: string
//   color: string
// }

// export const VEHICLE_ID = ({ year, make, model }: VehicleIdProps) =>
//   `vehicles/?year=${year}&make=${make}&model=${model}`

// export const ASSET_URL = ({ vehicleId, productId, color }: AssetUrlProps) =>
//   `vehicle/${vehicleId}?productID=${productId}&color=${color}&angle=032`

// export const fetchDetails = async (url: string) => {
//   const KEY = process.env.API_KEY
//   const DOMAIN = process.env.API_URL
//   const data = await fetch(`${DOMAIN}${url}&api_key=${KEY}`).then((res) => res.json())

//   return data
// }

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

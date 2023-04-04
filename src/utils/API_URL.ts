interface VehicleIdProps {
  year: string
  make: string
  model: string
}

interface AssetUrlProps {
  vehicleId: string
  productId: string
  color: string
}

export const VEHICLE_ID = ({ year, make, model }: VehicleIdProps) =>
  `vehicles/?year=${year}&make=${make}&model=${model}`

export const ASSET_URL = ({ vehicleId, productId, color }: AssetUrlProps) =>
  `vehicle/${vehicleId}?productID=${productId}&color=${color}&angle=032`

export const fetchDetails = async (url: string) => {
  const KEY = process.env.API_KEY
  const DOMAIN = process.env.API_URL
  const data = await fetch(`${DOMAIN}${url}&api_key=${KEY}`)
    .then((res) => res.json())
    
  return data
}

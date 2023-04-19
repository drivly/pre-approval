export async function fetchVehicleDetails(vin: string) {
  const res = await fetch(`https://listings.vin/${vin}`).then((res) => res.json())
  const { data } = res
  let price = Math.max(data?.retailListing?.price || 0, data?.wholesaleListing?.price || 0)
  let mileage = Math.max(data?.retailListing?.miles || 0, data?.wholesaleListing?.miles || 0)

  const { exteriorColor, year, make, model } = data?.vehicle
  return { price, mileage, color: exteriorColor, year, make, model }
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

export async function formatMoney(value: number | undefined) {
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

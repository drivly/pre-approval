export interface RequestInput {
  firstName: string
  middleInitial?: string
  lastName: string
  suffix?: string
  email: string
  streetAddress: string
  city: string
  zipcode: string
  phone: string
  state: string
  agree: boolean
}


export type VehicleInfoProps = {
  price: number
  mileage: number
  color: string
  year: number
  make: string
  model: string
  image: string
  vin: string
}
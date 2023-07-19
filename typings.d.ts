interface RequestInput {
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
  message: { [s: string]: string | string[] | undefined } | ArrayLike<string | string[] | undefined>
}

type VehicleInfoProps = {
  price: number
  mileage: number
  color: any
  year: any
  make: any
  model: any
  vin: string
}

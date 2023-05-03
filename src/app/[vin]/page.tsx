import Backarrow from '@components/Backarrow'
import VehicleCard from '@components/VehicleCard'
import { fetchVehicleDetails } from '@utils'
import { redirect } from 'next/navigation'
import Form from '../../components/Form'

export default async function VinPage({
  params,
  searchParams,
}: {
  params: { vin: string }
  searchParams: any
}) {
  const vin = params?.vin
  const vehicleInfo = await fetchVehicleDetails(vin)
  const vehicle = { vin, ...vehicleInfo }
  const hasVin = vin?.length > 0 ? true : false
  const brand = searchParams?.brand?.toString().toLowerCase()
  const search = searchParams
  delete search['cancelUrl']
  delete search['brand']

  if (!vehicleInfo) {
    redirect('/')
  }

  // TODO do something with the brand
  return (
    <main className='mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2'>
      <section className='relative flex h-full w-full flex-col justify-center'>
        <Backarrow />
        <VehicleCard vehicle={vehicle} hasVin={hasVin} />
      </section>
      <section
        className={`${
          vin ? 'shadow__left' : ''
        } h-full pt-8 lg:grid lg:place-content-center lg:pt-0`}>
        <Form hasVin={hasVin} search={search} brand={brand} />
      </section>
    </main>
  )
}

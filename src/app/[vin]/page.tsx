import VehicleCard from '@components/VehicleCard'
import { cn, fetchVehicleDetails } from '@utils'
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
  const brand = searchParams?.brand?.toString().toLowerCase()
  const search = searchParams
  delete search['cancelUrl']
  delete search['brand']

  if (!vehicleInfo) {
    redirect('/')
  }

  // TODO do something with the brand
  return (
    <main className='mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2'>
      <section className='flex h-full w-full flex-col justify-center lg:pt-1'>
        <VehicleCard vehicle={vehicle} />
      </section>
      <section
        className={cn('h-full w-full pt-8 lg:grid lg:place-content-center lg:pt-4', {
          'shadow__left shadow__horizontal': vin
        })}>
        <Form hasVin={Boolean(vehicle?.vin)} search={search} brand={brand} />
      </section>
    </main>
  )
}

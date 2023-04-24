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
  const cancelUrl = searchParams?.cancelUrl
  console.log('searchParams', searchParams)
  if (!vehicleInfo) {
    redirect('/')
  }

  return (
    <main className='mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2'>
      
      <section className='flex h-full w-full flex-col justify-center lg:min-h-[691px]'>
        <VehicleCard vehicle={vehicle} hasVin={hasVin} cancelUrl={cancelUrl} />
      </section>
      <section className={`${vin ? 'shadow__left' : ''} h-full lg:grid lg:place-content-center`}>
        <Form hasVin={hasVin} searchParams={searchParams} />
      </section>
    </main>
  )
}

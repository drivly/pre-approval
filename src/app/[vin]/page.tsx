import VehicleCard from '@components/VehicleCard'
import { fetchVehicleDetails } from '@utils'
import { redirect } from 'next/navigation'
import Form from '../../components/Form'
import { Suspense } from 'react'

export default async function VinPage({
  params,
  searchParams,
}: {
  params: { vin: string }
  searchParams: any
}) {
  const vehicleInfo = await fetchVehicleDetails(params.vin)
  const vehicle = { vin: params?.vin, ...vehicleInfo }
  console.log('vehicle', vehicle)

  if (!vehicleInfo) {
    redirect('/')
  }

  return (
    <main className='mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4'>
      <section className='flex h-full w-full flex-col justify-center lg:min-h-[691px]'>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-ignore */}
          <VehicleCard vehicle={vehicle} />
        </Suspense>
      </section>
      <section className={`${searchParams ? 'shadow__left' : ''} lg:grid h-full lg:place-content-center`}>
        <Form searchParams={searchParams} />
      </section>
    </main>
  )
}

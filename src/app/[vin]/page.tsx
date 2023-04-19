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
  const vehicle =  { vin: params?.vin, ...vehicleInfo }
  console.log('vehicle', vehicle)

  if (!vehicleInfo) {
    redirect('/')
  }

  return (
    <div className='mx-auto flex min-h-screen w-full flex-1'>
      <main className='mx-auto mb-0 grid min-h-screen max-w-7xl grid-cols-1 place-content-center gap-4 py-8 lg:grid-cols-2'>
        <section className='h-full max-w-[640px] lg:my-0'>
          <Suspense fallback={<div>Loading...</div>}>
            {/* @ts-ignore */}
            <VehicleCard vehicle={vehicle} />
          </Suspense>
        </section>

        <section className='flex h-full max-w-[639px] flex-col lg:my-0'>
          {/* <hr className='h-full drop-shadow-lg' /> */}
          <Form searchParams={searchParams} />
        </section>
      </main>
    </div>
  )
}

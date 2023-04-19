import VehicleCard from '@components/VehicleCard'
import { fetchVehicleDetails } from '@utils'
import { redirect } from 'next/navigation'
import Form from '../../components/Form'

export default async function VinPage({ params, searchParams }: { params: { vin: string }; searchParams: any }) {
  const vehicleInfo = await fetchVehicleDetails(params.vin)
  const vehicle = { vin: params?.vin, ...vehicleInfo }

  if (!vehicleInfo) {
    redirect('/')
  }

  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <main className='mx-auto mb-0 grid min-h-screen max-w-7xl grid-cols-1 place-content-center py-8 lg:grid-cols-2 gap-4'>
        <section className='max-w-[640px] lg:my-0 '>
          {/* @ts-ignore */}
          <VehicleCard vehicle={vehicle} />
        </section>
        
        <section className='max-w-[639px] lg:my-0 flex'>
          <hr className='h-full drop-shadow-lg' />
          <Form searchParams={searchParams} />
        </section>
      </main>
    </div>
  )
}

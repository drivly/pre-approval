import VehicleCard from '@components/VehicleCard'
import { fetchVehicleDetails } from '@utils'
import { redirect } from 'next/navigation'
import Form from '../../components/Form'

export default async function VinPage({ params }: { params: { vin: string } }) {
  const vehicleInfo = await fetchVehicleDetails(params.vin)
  const vehicle = { vin: params?.vin, ...vehicleInfo }

  if (!vehicleInfo) {
    redirect('/')
  }

  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <main className='mx-auto mb-0 grid min-h-screen max-w-7xl grid-cols-1 place-content-center gap-x-8 py-8 lg:grid-cols-2'>
        <section className='max-w-[640px] lg:my-0'>
          {/* @ts-ignore */}
          <VehicleCard vehicle={vehicle} />
        </section>
        <section className='max-w-[640px] lg:my-0'>
          <Form />
        </section>
      </main>
    </div>
  )
}

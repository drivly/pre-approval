import VehicleCard from '@components/VehicleCard'
import { fetchVehicleInfo } from '@utils'
import { redirect } from 'next/navigation'
import Form from '../../components/Form'

export default async function VinPage({ params }: { params: { vin: string } }) {
  const vehicle = await fetchVehicleInfo(params.vin)

  if (!vehicle) redirect('/')

  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <main className='mx-auto mb-0 grid min-h-screen max-w-7xl grid-cols-1 place-content-center gap-x-8 py-8 lg:grid-cols-2'>
        <section className='max-w-[640px] lg:my-0'>
          <VehicleCard vehicle={vehicle} />
        </section>
        <section className='max-w-[640px] lg:my-0'>
          <Form />
        </section>
      </main>
    </div>
  )
}

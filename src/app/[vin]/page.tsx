import VehicleCard from '@components/VehicleCard'
import { cn } from '@drivly/ui'
import { redirect } from 'next/navigation'
import Form from '../../components/Form'

export default async function VinPage({
  params,
  searchParams,
}: {
  params: { vin: string }
  searchParams: any
}) {
  console.log('searchParmas', searchParams)
  const vin = params?.vin
  const brand = searchParams?.brand?.toString().toLowerCase()
  const search = searchParams
  delete search['cancelUrl']
  delete search['brand']

  if (vin?.length !== 17) {
    redirect(`/${brand ? `?brand=${brand}` : ''}`)
  }

  return (
    <main className='mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-x-4 gap-y-8 sm:px-4 md:px-6 lg:grid-cols-2'>
      <section className='flex h-full w-full flex-col justify-center lg:pt-1'>
        {/* @ts-ignore react server component */}
        <VehicleCard vin={vin} />
      </section>

      <section
        className={cn('h-full w-full pt-8 lg:grid lg:place-content-center lg:pt-4', {
          'shadow__left shadow__horizontal': vin,
        })}>
        <Form hasVin={Boolean(params?.vin)} search={search} brand={brand} />
      </section>
    </main>
  )
}

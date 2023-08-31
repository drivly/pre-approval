/* eslint-disable @next/next/no-img-element */
import { fetchVehicleDetails } from '@utils'
import { redirect } from 'next/navigation'
import Backarrow from './Backarrow'
import Footer from './Footer'

interface Props {
  vin: string
}

export default async function VehicleCard({ vin }: Props) {
  const vehicleInfo = await fetchVehicleDetails(vin)
  const vehicle = { vin, ...vehicleInfo }

  if (Object?.keys(vehicle)?.length === 0) {
    redirect('/')
  }

  return (
    <div className='relative mt-12 flex max-w-[640px] flex-col justify-between py-8 lg:mt-0 lg:min-h-[800px]'>
      <Backarrow className='-top-6 left-4 my-2 sm:left-8 lg:-top-6' />
      <header className='relative space-y-0.5 px-4 pt-2 sm:px-8'>
        <h1 className='primary text-2xl font-bold capitalize'>
          {vehicle?.year} {vehicle?.make} {vehicle?.model}
        </h1>

        <p className='pt-0.5 text-xs tracking-[0.02em]'>
          <span>VIN:</span>
          <span className='tracking-[0.25em]'> {vehicle?.vin}</span>{' '}
        </p>
      </header>
      <div className='relative pb-[66%]'>
        <img
          src={`https://stock.photos.vin/${vehicle?.vin}`}
          alt='Vehcile Detail Images'
          className='absolute h-full w-full object-cover'
        />
      </div>
      <div className='hidden lg:block lg:pl-[29px] lg:pr-16'>
        <Footer hasVin={Boolean(vehicle?.vin)} />
      </div>
    </div>
  )
}

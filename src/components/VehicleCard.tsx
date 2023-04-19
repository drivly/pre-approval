/* eslint-disable @next/next/no-img-element */
import { formatMiles, formatMoney } from '@utils'
import Image from 'next/image'
import Drivly from '../../public/drivly.svg'
import { VehicleInfoProps } from '../../typings'

interface VehicleCardProps {
  vehicle: VehicleInfoProps | null
}

export default async function VehicleCard({ vehicle }: VehicleCardProps) {
  if (!vehicle) return null
  const price = await formatMoney(vehicle.price) || 'N / A'

  console.log('vehicle', vehicle)

  return (
    <div className='flex h-full max-w-[640px] flex-col justify-between py-8 px-4 sm:p-8'>
      <header className='space-y-0.5'>
        <h1 className='text-xl font-bold capitalize text-skin-base'>
          {vehicle?.year} {vehicle?.make} {vehicle?.model}
        </h1>
        <p className='text-base font-medium text-skin-base'>
          {price} | {formatMiles(vehicle?.mileage)} miles
        </p>
        <p className='text-xs tracking-[0.02em]'>VIN {vehicle?.vin}</p>
      </header>
      <div className='relative pb-[66%]'>
        <img
          src={`https://stock.photos.vin/${vehicle?.vin}`}
          alt='Vehcile Detail Images'
          className='absolute h-full w-full object-cover'
        />
      </div>
      <div className='flex h-[50px] items-center justify-center space-x-6'>
        <div className='flex items-center space-x-[6px]'>
          <span className='font-sans text-xs text-[#8792A2]'>Powered by</span>
          <Image src={Drivly} alt='Powered by' />
        </div>
        <div className='h-[20px] w-px bg-black' />
        <div className='flex space-x-6 font-sans text-xs font-medium tracking-[0.015em] text-[#8792A2]'>
          <a href='https://driv.ly/terms'>Terms</a>
          <a href='https://driv.ly/privacy'>Privacy</a>
        </div>
      </div>
    </div>
  )
}

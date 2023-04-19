'use client'
/* eslint-disable @next/next/no-img-element */
import { formatMiles, formatMoney } from '@utils'
import Image from 'next/image'
import { VehicleInfoProps } from '../../typings'
import Footer from './Footer'

interface VehicleCardProps {
  vehicle: VehicleInfoProps
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  if (!vehicle) return null
  const price = formatMoney(vehicle.price) || 'N / A'

  return (
    <div className='flex min-h-full max-w-[640px] flex-col justify-between py-8 px-4 sm:p-8'>
      <header className='space-y-0.5'>
        <h1 className='text-xl font-bold capitalize text-skin-base'>
          {vehicle?.year} {vehicle?.make} {vehicle?.model}
        </h1>
        <div className='flex items-center text-base font-medium text-skin-base'>
          <span>{price}</span> <hr className='w-4 rotate-90 border-b-0 border-DRIVLY' />{' '}
          <span>{formatMiles(vehicle?.mileage)} miles</span>
        </div>
        <p className='text-xs tracking-[0.02em] pt-0.5'>
          <span>VIN:</span>
          <span className='tracking-[0.2em]'> {vehicle?.vin}</span>{' '}
        </p>
      </header>
      <div className='relative pb-[66%]'>
        <img
          src={`https://stock.photos.vin/${vehicle?.vin}`}
          alt='Vehcile Detail Images'
          className='absolute h-full w-full object-cover'
        />
      </div>
      <div className='hidden lg:block'>
        <Footer />
      </div>
    </div>
  )
}

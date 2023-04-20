'use client'
/* eslint-disable @next/next/no-img-element */
import { formatMiles, formatMoney } from '@utils'
import Image from 'next/image'
import { VehicleInfoProps } from '../../typings'
import Footer from './Footer'

interface VehicleCardProps {
  vehicle: VehicleInfoProps
  havsVin?: boolean
}

export default function VehicleCard({ hasVin, vehicle }: VehicleCardProps) {
  if (!vehicle) return null
  const price = formatMoney(vehicle.price) || 'N / A'

  return (
    <div className='flex max-w-[640px] flex-col justify-between py-8 px-4 sm:px-8 lg:min-h-[700px] '>
      <header className='space-y-0.5'>
        <h1 className='text-xl font-bold capitalize text-skin-base'>
          {vehicle?.year} {vehicle?.make} {vehicle?.model}
        </h1>
        <div className='flex items-center text-base font-medium text-skin-base'>
          <span>{price}</span> <hr className='w-4 rotate-90 border-b-0 border-DRIVLY' />{' '}
          <span>{formatMiles(vehicle?.mileage)} miles</span>
        </div>
        <p className='pt-0.5 text-xs tracking-[0.02em]'>
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
      <div className='hidden pr-8 lg:block'>
        <Footer hasVin={hasVin} />
      </div>
    </div>
  )
}

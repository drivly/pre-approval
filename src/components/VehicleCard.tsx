/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { VehicleInfoProps } from '../../typings'
import { formatMiles, formatMoney } from '@utils'

interface VehicleCardProps {
  vehicle: VehicleInfoProps | null
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  if (!vehicle) return null

  return (
    <div className='flex flex-col justify-between h-full max-w-[640px] rounded-t-md bg-skin-card py-8 px-4 drop-shadow-md sm:p-8  lg:rounded-md'>
      <header className='space-y-0.5'>
        <h1 className='text-xl font-bold capitalize text-skin-base'>
          {vehicle?.year} {vehicle?.make} {vehicle?.model}
        </h1>
        <p className='text-base font-medium text-skin-base'>
          {formatMoney(vehicle?.price)} | {formatMiles(vehicle?.mileage)} miles
        </p>
        <p className='text-xs tracking-[0.02em]'>VIN {vehicle?.vin}</p>
      </header>
      <div className='relative pb-[66%]'>
        <img
          src={vehicle?.image!}
          alt='Vehcile Detail Images'
          className='absolute h-full w-full object-cover'
        />
      </div>
      <div className='mt-4'>
        <p className='text-sm text-skin-base font-light'>
          Powered by Drivly. Cloud Motors is a licensed and bonded auto broker. We provide a free, no
          obligation, and confidential service to help you find the best financing options for your
          next vehicle.
        </p>
      </div>
    </div>
  )
}

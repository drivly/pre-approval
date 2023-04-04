/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { VehicleInfoProps } from '../../typings'
import { formatMiles, formatMoney } from '@utils'

interface VehicleCardProps {
  vehicle: VehicleInfoProps | null
}

export default async function VehicleCard({ vehicle }: VehicleCardProps) {
  if (!vehicle) return null

  return (
    <div className='flex h-full max-w-[640px] flex-col justify-between rounded-t-md bg-skin-card py-8 px-4 drop-shadow-md sm:p-8  lg:rounded-md'>
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
          src={`https://stock.photos.vin/${vehicle?.vin}`}
          alt='Vehcile Detail Images'
          className='absolute h-full w-full object-cover'
        />
      </div>
      <div className='flex h-[50px] items-center justify-between text-sm font-normal'>
        <a href='https://driv.ly/privacy'>Privacy Notice</a>
        <a href='https://driv.ly/terms'>Terms and Conditions</a>
      </div>
    </div>
  )
}

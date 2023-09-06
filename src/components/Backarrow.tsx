'use client'

import { cn } from '@drivly/ui'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'

interface BackArrowProps extends HTMLAttributes<HTMLButtonElement> {}

const Backarrow: FC<BackArrowProps> = ({ className, ...props }) => {
  const searchParams = useSearchParams()
  const source = searchParams.get('utm_source')
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={cn(
        'absolute z-50 grid h-8 w-8 place-content-center place-items-center rounded-[5px] border-none hover:bg-[#f1f5f9] outline-none ring-0 drop-shadow-sm active:outline-none',
        { hidden: !source },
        className
      )}
      {...props}>
      <ChevronLeftIcon className='h-7 w-7 text-primary-detail' />
    </button>
  )
}

export default Backarrow

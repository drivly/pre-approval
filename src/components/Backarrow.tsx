'use client'

import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { cn } from '@utils'
import { usePathname, useRouter } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'

interface BackArrowProps extends HTMLAttributes<HTMLButtonElement> {}

const Backarrow: FC<BackArrowProps> = ({ className, ...props }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={cn(
        'absolute z-50 grid h-8 w-8 place-content-center place-items-center rounded-[5px] border-none bg-[#8792A2]/10 outline-none ring-0 drop-shadow-sm active:outline-none',
        className
      )}
      {...props}>
      <ChevronLeftIcon className='text-primary-detail/50 h-7 w-7' />
    </button>
  )
}

export default Backarrow

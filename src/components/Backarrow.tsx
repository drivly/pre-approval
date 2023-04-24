'use client'

import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { usePathname, useSearchParams } from 'next/navigation'

const Backarrow = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const cancelUrl = searchParams.get('cancelUrl')?.toString()
  return (
    <a
      href={cancelUrl}
      className={`${isHome ? '-top-8 left-4 my-2 sm:left-12' : 'top-2 lg:top-28 left-4 sm:left-8'} ${
        cancelUrl
          ? 'absolute z-50 grid h-12 w-12 place-content-center place-items-center rounded-[5px] border-none outline-none ring-0 drop-shadow-sm hover:bg-[#8792A2]/10 active:outline-none'
          : 'hidden'
      }`}>
      <ChevronLeftIcon className='h-7 w-7 text-DETAIL__BLACK' />
    </a>
  )
}

export default Backarrow

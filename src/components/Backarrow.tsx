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
      className={`${isHome ? 'left-28 top-0 mx-2 my-2' : 'right-0 top-0 sm:-right-4 lg:right-0'} ${
        cancelUrl
          ? 'absolute z-50 grid h-12 w-12 place-content-center place-items-center rounded-[5px] border-none bg-[#8792A2]/10 outline-none ring-0 drop-shadow-sm active:outline-none'
          : 'hidden'
      }`}>
      <ChevronLeftIcon className='h-6 w-6 text-DETAIL__BLACK' />
    </a>
  )
}

export default Backarrow

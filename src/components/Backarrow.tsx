'use client'

import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Backarrow = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const cancelUrl = searchParams.get('cancelUrl')?.toString()
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className={`${
        isHome ? '-top-6 left-4 my-2 sm:left-8' : 'left-4 top-4 sm:left-8 lg:top-[92px]'
      } absolute z-50 grid h-8 w-8 place-content-center place-items-center rounded-[5px] border-none outline-none ring-0 drop-shadow-sm hover:bg-[#8792A2]/10 active:outline-none`}>
      <ChevronLeftIcon className='h-7 w-7 text-DETAIL__BLACK' />
    </button>
  )
}

export default Backarrow

import Backarrow from '@components/Backarrow'
import Form from '@components/Form'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className='mx-auto flex h-full w-full max-w-5xl flex-1 flex-col'>
      <div className='flex'>
        <Link href='/1C4RJFBG2MC686287' className='absolute right-0 top-0 z-50'>
          <span className='inline-flex w-full justify-center rounded-bl-md border border-transparent bg-skin-button-inverted font-medium text-skin-inverted shadow-sm hover:border-DRIVLY focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 px-4 py-2 text-sm'>
            VIN page
          </span>
        </Link>
      </div>
      <main className='relative mx-auto mb-0 flex min-h-screen max-w-[640px] items-center py-8'>
        <section className='relative lg:my-0'>
          <Suspense>
            <Backarrow />
          </Suspense>
          <Form />
        </section>
      </main>
    </div>
  )
}

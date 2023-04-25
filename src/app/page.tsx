import Backarrow from '@components/Backarrow'
import Form from '@components/Form'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className='mx-auto flex h-full w-full max-w-5xl flex-1 flex-col'>
      <div className='flex'>
        <Link href='/1C4RJFBG2MC686287' className='absolute right-0 top-0 z-50'>
          <span className='mx-4 my-2 flex h-12 items-center rounded-[5px] bg-FADE_BLACK px-3 text-sm text-white'>
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

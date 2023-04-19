import Form from '@components/Form'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <Link href='/2C3CDZGG7LH189078' className='absolute z-50'>
        <span className='my-2 flex h-10 items-center rounded-[5px] bg-FADE_BLACK px-3 text-sm text-white'>
          VIN page
        </span>
      </Link>
      <main className='mx-auto mb-0  flex min-h-screen  max-w-[640px] items-center py-8'>
        <section className='lg:my-0'>
          <Form />
        </section>
      </main>
    </div>
  )
}

import Backarrow from '@components/Backarrow'
import Form from '@components/Form'

export default function Home({ searchParams: { brand } }: { searchParams: { brand: string } }) {
  return (
    <div className='mx-auto flex h-full w-full max-w-5xl flex-1 flex-col'>
      <main className='relative mx-auto mb-0 flex min-h-screen max-w-[640px] items-center py-8'>
        <section className='relative lg:my-0'>
          <Backarrow className='left-4 my-2 sm:left-8 top-6' />
          <Form brand={brand} />
        </section>
      </main>
    </div>
  )
}

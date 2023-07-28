import Backarrow from '@components/Backarrow'
import Form from '@components/Form'

export default function Home({ searchParams: { brand } }: { searchParams: { brand: string } }) {
  return (
    <div className='mx-auto flex h-full w-full max-w-5xl flex-1 flex-col sm:px-4 md:px-6'>
      <main className='relative mx-auto mb-0 flex min-h-screen max-w-[640px] items-center py-8'>
        <section className='relative lg:my-0'>
          <Backarrow className='left-4 top-6 my-2 sm:left-8' />
          <Form brand={brand} />
        </section>
      </main>
    </div>
  )
}

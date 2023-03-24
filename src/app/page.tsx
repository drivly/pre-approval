import Form from '@components/Form'

export default function Home() {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 min-h-screen'>
      <section className='sm:px-4 py-12 lg:px-8 max-w-[700px] mx-auto'>

        <Form />

      </section>
    </main>
  )
}

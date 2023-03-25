import Form from '@components/Form'

export default function Home() {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 min-h-screen max-w-6xl mx-auto'>
      <section className='py-8 max-w-[700px] mx-auto'>

        {/* Image of VIN Vehicle goes here and details if any */}
        {/* Or just show the form if no VIN */}
      </section>
      <section className=' py-8 max-w-[700px] mx-auto'>

        <Form />
      </section>
    </main>
  )
}

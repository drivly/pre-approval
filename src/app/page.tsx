import Form from '@components/Form'

export default function Home() {
  return (
    <main className='mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-2'>
      <section className='mx-auto max-w-[700px] py-8'>
        {/* Image of VIN Vehicle goes here and details if any */}
        {/* Or just show the form if no VIN */}
      </section>
      <section className='mx-auto max-w-[700px] py-8'>
        <Form />
      </section>
    </main>
  )
}

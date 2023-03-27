import Form from '@components/Form'

export default function Home({ params }: { params: any }) {
  console.log("params", params)
  return (
    <div className='flex flex-1 w-full h-full mx-auto'>
      <main className="mx-auto mb-0  min-h-screen max-w-[700px] py-8 flex items-center">
        <section className="lg:my-0">
          <Form />
        </section>
      </main>
    </div>
  )
}

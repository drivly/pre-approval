import Form from '@components/Form'

export default function Home({ params }: { params: any }) {
  console.log("params", params)
  return (
    <main className='mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-2'>
      <Form />
    </main>
  )
}

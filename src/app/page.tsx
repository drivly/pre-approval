import Form from '@components/Form'
import ToastWrapper from '../components/ToastWrapper'

export default function Home({ params }: { params: any }) {
  console.log("params", params)
  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <main className='mx-auto mb-0  flex min-h-screen  max-w-[640px] items-center py-8'>
        <section className='lg:my-0'>
          <Form />
        </section>
      </main>

    </div>
  )
}

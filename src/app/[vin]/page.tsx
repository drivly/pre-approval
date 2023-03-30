import Form from '../../components/Form'
import ToastWrapper from '../../components/ToastWrapper'

export default function Page() {
  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <main className='mx-auto mb-0 grid min-h-screen max-w-7xl grid-cols-1 place-content-center gap-x-8 py-8 lg:grid-cols-2'>
        <section className='max-w-[640px] lg:my-0'>
          <Form />
        </section>
      </main>
      <ToastWrapper />
    </div>
  )
}


import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import ToastWrapper from '../../components/ToastWrapper'
import Form from '../../components/Form'

export default function Page() {
  return (
    <div className='mx-auto flex h-full w-full flex-1'>
      <main className='mx-auto mb-0 min-h-screen max-w-7xl grid place-content-center grid-cols-1 lg:grid-cols-2 py-8 gap-x-8'>
        <section className='lg:my-0 max-w-[640px]'>
          <Form />
        </section>
      </main>
      <ToastWrapper />
    </div>
  )
}

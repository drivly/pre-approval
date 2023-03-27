import Form from '@components/Form'

export default function PageWithVin({ params }: { params: any }) {
  console.log("params", params)
  return (
    <div>
      <main className="mx-auto mb-0 grid min-h-screen max-w-7xl grid-cols-1 py-8  xl:grid-cols-10 lg:gap-[75px]">
        <section className="lg:col-span-6 lg:mt-0 lg:mb-0">
          <Form />
        </section>
        <section className="col-span-1 lg:col-span-4">
          {/* Image of VIN Vehicle goes here and details if any */}
          {/* Or just show the form if no VIN */}
        </section>
      </main>
    </div>
  )
}

'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h2 className='font-inter text-4xl font-semibold tracking-[0.02em] text-danger'>
        Oops, Something went wrong!
      </h2>
      <button
        className='mt-6 rounded-md bg-primary px-6 py-3 font-medium tracking-wide text-white'
        onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}

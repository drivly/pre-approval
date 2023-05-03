'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex h-screen items-center justify-center'>
      <h2 className='font-inter text-2xl font-semibold text-dangerColor'>
        Oops, Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </button>
    </div>
  )
}

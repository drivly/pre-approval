import React from 'react'
import Navbar from './Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex-1 bg-slate-50'>
      <Navbar />
      {children}
    </main>
  )
}

export default layout

import React from 'react'
import Navbar from './Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-slate-50 flex-1'>
      <Navbar />
      {children}
    </main>
  )
}

export default layout

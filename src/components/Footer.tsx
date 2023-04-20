import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex h-[50px] items-center justify-center space-x-6'>
      <div className='flex items-center space-x-[6px]'>
        <Image src='/PoweredByDark.svg' alt='Powered by' width={117} height={22} />
      </div>
      <div className='h-[20px] w-px bg-[#8792A2]/30' />
      <div className='flex space-x-6 font-sans text-[12px] leading-[22px] font-light tracking-[0.015em] text-[#8792A2]'>
        <a href='https://driv.ly/terms'>Terms</a>
        <a href='https://driv.ly/privacy'>Privacy</a>
      </div>
    </div>
  )
}

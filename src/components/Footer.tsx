import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex h-[50px] items-center justify-between w-full'>
      <div className='flex items-center space-x-[6px]'>
        <Image src='/PoweredByDark.svg' alt='Powered by' width={117} height={22} />
      </div>
      
      <div className='flex space-x-4 font-sans text-[12px] leading-[22px] font-light tracking-[0.015em] text-[#8792A2] items-center'>
        <a href='https://driv.ly/terms'>Terms</a>
        <div className='h-[16px] w-px bg-[#8792A2]/60 rotate-12' />
        <a href='https://driv.ly/privacy'>Privacy</a>
      </div>
    </div>
  )
}

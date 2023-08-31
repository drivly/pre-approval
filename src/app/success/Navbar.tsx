'use client'

import { ContactUs } from '@drivly/ui'
import Image from 'next/image'
import Link from 'next/link'
import navLogo from '../../../public/DrivlyLogo.svg'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 flex h-[65px] border-b border-zinc-200 bg-white'>
      <div className='mx-auto block h-full w-screen max-w-7xl'>
        <div className='flex h-full items-center justify-between px-0 md:px-4'>
          <Link
            href='/'
            className='ml-4 w-fit cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 md:ml-0'>
            <Image
              className='inline-block h-8 w-auto sm:h-9'
              src={navLogo}
              alt='Drivly and Rocket Auto Logo'
              priority
            />
          </Link>
          <ContactUs className='' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

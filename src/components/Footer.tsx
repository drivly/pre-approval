import { cn } from '@utils'
import React from 'react'
import PoweredByDrivly from './PoweredByDrivly'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  hasVin?: boolean
}

export default function Footer({ className, hasVin, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        'text-muted flex w-full items-center justify-center space-x-8',
        {
          'justify-center space-x-8 lg:justify-between ': hasVin,
        },
        className
      )}
      {...props}>
      <PoweredByDrivly />

      <div className='font-sans flex items-center space-x-4 text-[12px] font-light leading-[22px] tracking-[0.015em]'>
        <a href='https://driv.ly/terms' target='_blank'>
          Terms
        </a>
        <div className='bg-muted/60 h-[16px] w-px rotate-12' />
        <a href='https://driv.ly/privacy' target='_blank'>
          Privacy
        </a>
      </div>
    </footer>
  )
}

import { cn } from '@utils'
import PoweredByDrivly from './PoweredByDrivly'

export default function Footer({ hasVin }: { hasVin?: any }) {
  return (
    <div
      className={cn('flex h-[38px] w-full items-center justify-center space-x-8 text-[#A2A2A5]', {
        'justify-center space-x-8 lg:justify-between ': hasVin,
      })}>
      <PoweredByDrivly />

      <div className='font-sans flex items-center space-x-4 text-[12px] font-light leading-[22px] tracking-[0.015em]'>
        <a href='https://driv.ly/terms' target='_blank'>
          Terms
        </a>
        <div className='h-[16px] w-px rotate-12 bg-[#A2A2A5]/60' />
        <a href='https://driv.ly/privacy' target='_blank'>
          Privacy
        </a>
      </div>
    </div>
  )
}

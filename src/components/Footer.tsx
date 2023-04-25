import PoweredByDrivly from './PoweredByDrivly'

export default function Footer({ hasVin }: { hasVin?: any }) {
  return (
    <div
      className={`${
        hasVin === true ? 'justify-center space-x-8 lg:justify-between' : 'justify-center space-x-8'
      } flex h-[50px] w-full items-center `}>
      <div className='flex items-center space-x-[6px]'>
        <PoweredByDrivly />
      </div>

      <div className='flex items-center space-x-4 font-sans text-[12px] font-light leading-[22px] tracking-[0.015em] text-[#8792A2]'>
        <a href='https://driv.ly/terms'>Terms</a>
        <div className='h-[16px] w-px rotate-12 bg-[#8792A2]/60' />
        <a href='https://driv.ly/privacy'>Privacy</a>
      </div>
    </div>
  )
}

import React from 'react'

export default function AgreementText({ dealer = 'Cloud Motors' }: { dealer?: string }) {
  return (
    <p className='rounded-[5px] font-inter text-[12px] leading-5 text-secondary'>
      By clicking the I Agree checkbox and Submit, I consent to have my credit file accessed for
      purposes of prequalifying for a vehicle loan. This is a soft inquiry and will not impact my
      credit score. I agree to the{' '}
      <a
        href='https://driv.ly/privacy'
        target='_blank'
        className='focus-visible:ring-primary text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100'>
        Privacy Notice
      </a>
      ,{' '}
      <a
        href='https://driv.ly/terms'
        target='_blank'
        className='focus-visible:ring-primary text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100'>
        Terms and Conditions
      </a>{' '}
      and I acknowledge I may be contacted by <span className='capitalize'>{dealer}</span>. I
      understand that I might not prequalify depending on the prequalification criteria.
    </p>
  )
}

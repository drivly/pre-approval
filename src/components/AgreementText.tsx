import React from 'react'

export default function AgreementText({ dealer = 'Cloud Motors' }: { dealer?: string }) {
  return (
    <p className='rounded-[5px] font-inter text-[11px] leading-5 text-skin-label'>
      By clicking the I Agree checkbox and Submit, I consent to have my credit file accessed for
      purposes of prequalifying for a vehicle loan. This is a soft inquiry and will not impact my
      credit score. I agree to the Privacy Notice, Terms and Conditions and I acknowledge I may be
      contacted by <span className='capitalize'>{dealer}</span>. I understand that I might not prequalify depending on the
      prequalification criteria.
    </p>
  )
}

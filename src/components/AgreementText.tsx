import React from 'react'

export default function AgreementText({ dealer }: { dealer: string }) {
  return (
    <p className='mt-4 mb-8 rounded-[5px] font-lato text-xs font-medium text-skin-label'>
      By clicking the I Agree checkbox and Submit, I consent to have my credit file accessed for
      purposes of prequalifying for a vehicle loan. This is a soft inquiry and will not impact my
      credit score. I agree to the Privacy Notice, Terms and Conditions and I acknowledge I may be
      contacted by {dealer}. I understand that I might not prequalify depending on the
      prequalification criteria.
    </p>
  )
}

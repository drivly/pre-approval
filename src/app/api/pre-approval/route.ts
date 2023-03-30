import { emailReg, zipReg } from '@lib/regex'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  console.log('data api request', data)
  const isEmailValid = validateEmail(data.email)
  const isZipcodeValid = validateZipcode(data.zipcode)

  if (!isEmailValid || !isZipcodeValid) {
    return new Response('Invalid input', { status: 400 })
  }

  // create Slack Message for channel
  // send Slack Message
  // send email to user
  // send email to admin
  // send email to sales
  // send succcess response

  return NextResponse.json({ success: true })
}

//   middleInitial: '',

function validateEmail(email: string) {
  return emailReg.test(email)
}

function validateZipcode(zipcode: string) {
  return zipReg.test(zipcode)
}

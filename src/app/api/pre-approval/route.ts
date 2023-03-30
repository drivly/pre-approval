import { emailReg, zipReg } from '@lib/regex'
import { slackMsgRequest } from '@utils/slackMsg'
import { NextResponse } from 'next/server'

const slackUrl = process.env.SLACK_WEBHOOK_URL

export async function POST(request: Request) {
  const data = await request.json()

  console.log('data api request', data)
  const isEmailValid = validateEmail(data.email)
  const isZipcodeValid = validateZipcode(data.zipcode)

  if (!isEmailValid || !isZipcodeValid) {
    return new Response('Invalid input', { status: 400 })
  }

  const slackReq = await slackMsgRequest({ url: slackUrl, data })
  
  console.log('slackReq', slackReq)

  return NextResponse.json({ success: true })
}

function validateEmail(email: string) {
  return emailReg.test(email)
}

function validateZipcode(zipcode: string) {
  return zipReg.test(zipcode)
}
  // firstName: 'Chris',
  // middleInitial: '',
  // lastName: 'Risner',
  // email: 'chris@driv.ly',
  // streetAddress: '3209 Pheasant Run Trl',
  // city: 'Mur',
  // zipcode: '37130',
  // phone: '+15617812819',
  // state: 'AZ',
  // agree: true

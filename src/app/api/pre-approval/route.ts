import { emailReg, zipReg } from '@lib/regex'
import { slackMsgRequest } from '@utils/slackMsg'
import { NextResponse } from 'next/server'

const slackUrl = process.env.SLACK_WEBHOOK_URL

export async function POST(request: Request) {
  const data = await request.json()

  const isEmailValid = validateEmail(data.email)
  const isZipcodeValid = validateZipcode(data.zipcode)

  if (!isEmailValid || !isZipcodeValid) {
    return NextResponse.json({ status: 400, success: false, message: 'Invalid request' })
  }

  try {
    await slackMsgRequest({ url: slackUrl, data })

    return NextResponse.json({ status: 200, success: true })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({ status: 500, success: false, message: 'Internal Server Error' })
  }
}

function validateEmail(email: string) {
  return emailReg.test(email)
}

function validateZipcode(zipcode: string) {
  return zipReg.test(zipcode)
}

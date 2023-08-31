import { emailReg, zipReg } from '@lib/regex'
import { mutateRecord, searchAirtable } from '@utils/airtable'
import { createLead } from '@utils/createLead'
import { slackMsgRequest } from '@utils/slackMsg'
import { submitCredit } from '@utils/submitCredit'
import { NextResponse } from 'next/server'

const slackUrl = process.env.SLACK_WEBHOOK_URL
const creditURL = process.env.CREDIT_700_URL!
const conciergeId = 'app0ha03ugcl45qM1'
const commerceId = 'appKhmwoJTqB95JT9'

export async function POST(request: Request) {
  let leadId = ''
  const data = await request.json()

  const isEmailValid = emailReg.test(data.email)
  const isZipcodeValid = zipReg.test(data.zipcode)

  if (!isEmailValid || !isZipcodeValid) {
    return NextResponse.json({ status: 400, success: false, message: 'Invalid request' })
  }

  const { firstName, lastName, streetAddress, zipcode, recId, ...rest } = data
  const credit = {
    firstname: firstName,
    lastname: lastName,
    address: streetAddress,
    zip: zipcode,
    ...rest,
  }

  if (!recId) {
    const { middleinitial, streetAddress, recId, ...payload } = data

    // Check if lead exists
    const { records } = await searchAirtable(
      conciergeId,
      'Leads',
      `AND({Email}=%27${data.email}%27)`
    )
    const existingLeadId = records?.[0]?.id

    if (existingLeadId) {
      leadId = existingLeadId
    } else {
      const leadRequest = await createLead(payload)
      leadId = leadRequest?.id
    }
  }

  if (recId) leadId = 'rec' + recId
  const search = new URLSearchParams({ ...credit }).toString()

  try {
    const [preAppId] = await Promise.all([
      handleAirtableRequest(credit, leadId),
      slackMsgRequest({ url: slackUrl, data }),
      creditURL?.length > 0 && submitCredit(creditURL, search),
    ])

    return NextResponse.json({ status: 200, success: true, data: { preAppId } })
  } catch (error: any) {
    console.log('error', error)
    return NextResponse.json({ status: 500, success: false, message: error?.message })
  }
}

const handleAirtableRequest = async (credit: any, leadId?: string) => {
  const { firstname, lastname, middleinitial, suffix, email, phone, address, city, state, zip } =
    credit

  let formattedPhone = phone?.replace(/^\+?1|\D/g, '')
  if (formattedPhone?.length === 10)
    formattedPhone = `(${formattedPhone.slice(0, 3)}) ${formattedPhone.slice(
      3,
      6
    )}-${formattedPhone.slice(6, 10)}`

  const filter = `AND({Email}=%27${email}%27)`

  try {
    const { records } = await searchAirtable(commerceId, 'Pre-Approvals', filter)

    let preApprovalId = records?.[0]?.id
    const record = records?.[0]

    if (
      !records?.length ||
      record?.name !== `${firstname} ${lastname}` ||
      record?.firstName !== firstname ||
      record?.middleInitial !== middleinitial ||
      record?.lastName !== lastname ||
      record?.suffix !== suffix ||
      record?.email !== email ||
      record?.phone !== formattedPhone ||
      record?.address !== address ||
      record?.city !== city ||
      record?.state !== state ||
      record?.zip !== zip
    ) {
      const fields = {
        'First Name': firstname,
        'Last Name': lastname,
        'Middle Initial': middleinitial ? middleinitial : '',
        Suffix: suffix ? suffix : '',
        Email: email,
        Phone: formattedPhone,
        Address: address,
        City: city,
        State: state,
        Zip: zip,
      }

      if (preApprovalId) {
        await mutateRecord(commerceId, 'Pre-Approvals', preApprovalId, fields)
      } else {
        const { id } = await mutateRecord(commerceId, 'Pre-Approvals', undefined, fields)
        preApprovalId = id
      }

      if (leadId) {
        await mutateRecord(conciergeId, 'Leads', leadId, {
          'Pre-Approval ID': preApprovalId,
        })
      }
      return preApprovalId?.replace('rec', '')
    }
  } catch (error: any) {
    console.log('error', error.message)
    throw new Error(`Error updating Airtable: ${error?.message}`)
  }
}

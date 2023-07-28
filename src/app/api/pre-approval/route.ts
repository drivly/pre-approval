import { emailReg, zipReg } from '@lib/regex'
import { slackMsgRequest } from '@utils/slackMsg'
import { NextResponse } from 'next/server'

const slackUrl = process.env.SLACK_WEBHOOK_URL
const AT_KEY = process.env.AIRTABLE_KEY
const creditURL = process.env.CREDIT_700_URL!

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

  if (recId) leadId = 'rec' + recId
  const search = new URLSearchParams({ ...credit })

  try {
    const [preAppId] = await Promise.all([
      handleAirtableRequest(credit, leadId),
      slackMsgRequest({ url: slackUrl, data }),
    ])

    if (creditURL?.length > 0) {
      await fetch(`${creditURL}/credit?${search.toString()}`, { method: 'GET' }).then((res) =>
        res.json()
      )
    }

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

  const filter = `&filterByFormula=AND({Email}=%27${credit.email}%27)`
  const conciergeId = 'app0ha03ugcl45qM1'
  const commerceId = 'appKhmwoJTqB95JT9'

  try {
    const { records } = await fetch(
      `https://camel.case.do/api.airtable.com/v0/${commerceId}/Pre-Approvals?cellFormat=string&userLocale=en-us&timeZone=America/Chicago${filter}&api_key=${AT_KEY}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json())

    let preApprovalId = records?.[0]?.id
    const record = records?.[0]?.fields

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
        const url = mutateAirtable(commerceId, 'Pre-Approvals', preApprovalId)
        await fetch(url, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields }),
        })
      } else {
        const url = mutateAirtable(commerceId, 'Pre-Approvals')
        const { id } = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields }),
        }).then((res) => res.json())
        preApprovalId = id
      }

      if (leadId) {
        const leadUrl = mutateAirtable(conciergeId, 'Leads', leadId)
        await fetch(leadUrl, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields: { 'Pre-Approval ID': preApprovalId } }),
        }).then((res) => res.json())
      }
      return preApprovalId?.replace('rec', '')
    }
  } catch (error: any) {
    console.log('error', error.message)
    throw new Error(`Error updating Airtable: ${error?.message}`)
  }
}

const mutateAirtable = (base: string, table: string, id?: string) =>
  `https://camel.case.do/api.airtable.com/v0/${base}/${table}${
    id ? `/${id}` : ''
  }?cellFormat=string&userLocale=en-us&timeZone=America/Chicago&api_key=${AT_KEY}`

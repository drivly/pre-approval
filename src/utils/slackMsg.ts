import { RequestInput } from '../../typings'
import { formatDate } from '.'

interface SlackMsgRequest {
  url: string | undefined
  data: RequestInput
}

export async function slackMsgRequest({ url, data }: SlackMsgRequest) {
  const date = formatDate(new Date())
  const messageValues = Object.values(data.message).join(' | ') || 'No message'
  const message = {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*PRE-APPROVAL* REQUEST :rocket:\n* ${data.firstName} ${data.lastName} | ${data?.email}*`,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Full name:* ${data.firstName} ${data?.middleInitial ? data?.middleInitial : ''} ${
            data.lastName
          } ${data?.suffix ? data?.suffix : ''}\n*Email:* ${data.email}\n*Phone:* ${
            data.phone
          }\n*Address:* ${data.streetAddress} \n*City:* ${data.city}\n*State:* ${
            data.state
          }\n*Zipcode:* ${data.zipcode}\n *Date:* ${date}\"`,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:* ${messageValues}\"`,
        },
      },
    ],
  }
  await fetch(url!, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' },
  })
}

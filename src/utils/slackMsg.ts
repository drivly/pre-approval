interface SlackMsgRequest {
  url: string | undefined
  data: RequestInput
}

function formatDate(date: string | Date | number | any): string {
  return new Date(date).toLocaleDateString('en-US', { timeZoneName: 'short' })
}

export async function slackMsgRequest({ url, data }: SlackMsgRequest) {
  const date = formatDate(new Date())

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
          }\n*Zipcode:* ${data.zipcode}\n *Date:* ${date}`,
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

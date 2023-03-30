import { RequestInput } from '../../typings'
import formatDate from './formatDate'

interface SlackMsgRequest {
  url: string | undefined
  data: RequestInput
}

export async function slackMsgRequest({ url, data }: SlackMsgRequest) {
  const date = formatDate(new Date())
  const message = {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `PRE-APPROVAL CREDIT REQUEST :rocket:\n*<${data?.email} | ${data.firstName} ${data.lastName}>*`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Full name:* ${data.firstName} ${data.middleInitial} ${data.lastName} ${data.suffix}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Address:* ${data.streetAddress} \n*City:* ${data.city}\n*State:* ${data.state}*Zipcode:* ${data.zipcode}\n *Date:* ${date}\"`,
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

// interface Props {
//   url: string | undefined
//   data: {
//     email: string
//     id: string
//     image: string
//     name: string
//     username?: string
//     feedback?: string
//     date: string
//     subscription?: boolean
//   }
// }
// export async function slackSubRequest({ url, data }: Props) {
//   const message = {
//     blocks: [
//       {
//         type: 'section',
//         text: {
//           type: 'mrkdwn',
//           text: `I would like to receive emails and information from Drivly :rocket:\n*<${data?.email} | ${data.name}>*`,
//         },
//       },
//       {
//         type: 'section',
//         text: {
//           type: 'mrkdwn',
//           text: `*Email:* ${data.email}\n*Username:* ${data.username} \n*MongoDB_ID:* ${data.id}\n*Date:* ${data.date}\n*Subscribed:* ${data.subscription}\n"`,
//         },
//       },
//     ],
//   }
//   await fetch(url!, {
//     method: 'POST',
//     body: JSON.stringify(message),
//     headers: { 'Content-Type': 'application/json' },
//   })
// }

// export async function slackFeedback({ url, data }: Props) {
//   const message = {
//     blocks: [
//       {
//         type: 'section',
//         text: {
//           type: 'mrkdwn',
//           text: `Feedback for Drivly Connect :rocket:\n*<${data?.email} | ${data.name}>*`,
//         },
//       },
//       {
//         type: 'section',
//         text: {
//           type: 'mrkdwn',
//           text: `*Email:* ${data.email}\n*Username:* ${data?.username} \n*MongoDB_ID:* ${data.id}\n*Date:* ${data.date}\n*Subscribed:* ${data?.subscription}\n*Feedback:* \n ${data.feedback}\"`,
//         },
//       },
//     ],
//   }
//   await fetch(url!, {
//     method: 'POST',
//     body: JSON.stringify(message),
//     headers: { 'Content-Type': 'application/json' },
//   })
// }

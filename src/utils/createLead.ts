export const createLead = async (data: any) => {
  const d = await fetch('https://concierge.do/ingest/rocket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (d.status !== 200) {
    console.log(`MAJOR ERROR: Failed to create lead record.`, await d.text())
    return null
  }
  return (await d.json()).data
}

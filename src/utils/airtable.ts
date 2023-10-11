import 'server-only'

export const mutateRecord = async (base: string, table: string, id?: string, data?: any) => {
  const d = await fetch(`https://api.airtable.com/v0/${base}/${table}${id ? `/${id}` : ''}`, {
    method: id ? 'PATCH' : 'POST',
    body: JSON.stringify({ fields: data }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
    },
  })

  if (d.status != 200) {
    return null
  }
  return await d.json()
}

export const searchAirtable = async (base: string, table: any, query: any) => {
  const d = await fetch(`https://airtable.vin/${base}/${table}?${query}`, {
    headers: { Authorization: `Bearer ${process.env.VIN_UNIVERSE_KEY!}` },
  })

  if (d.status != 200) {
    return null
  }

  return (await d.json()).data
}

export const submitCredit = async (url: string, search: string) => {
  const res = await fetch(`${url}/credit?${search}`, { method: 'GET' })

  if (res.status != 200) {
    return null
  }
  const text = await res.text()
  console.log('res', text)
  return await res.json()
}

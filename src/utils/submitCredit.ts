export const submitCredit = async (url: string, search: string) =>
  await fetch(`${url}/credit?${search}`, { method: 'GET' }).then((res) => res.json())

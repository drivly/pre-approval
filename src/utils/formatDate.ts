export default function formatDate(date: string | Date | number | any, options?: any): string {
  return new Date(date).toLocaleDateString('en-US', { timeZoneName: 'short' })
}

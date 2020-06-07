export default function Currency ({value, currency = 'AUD'}) {
  const format = Intl.NumberFormat('en-AU', { style: 'currency', currency }).format
  return <>{format(value)}</>
}

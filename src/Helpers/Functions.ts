export function FormatDateToISO(data?: Date): string
{
  return data ?
    data.toLocaleDateString('en-US', {year: "numeric", month: "2-digit", day: "2-digit", }).split('/').reverse().join('-')
    :
    new Date().toLocaleDateString('en-US', {year: "numeric", month: "2-digit", day: "2-digit", }).split('/').reverse().join('-')
}

export function FormatColumn(column: string): string
{
  return column.replaceAll("_", " ").toUpperCase()
}
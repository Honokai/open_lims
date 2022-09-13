import { GenericObjectKeyType } from "./TypeHelpers"

export function FormatDateToISO(data?: Date): string
{
  return data ?
    data.toLocaleDateString('en-US', {year: "numeric", month: "2-digit", day: "2-digit", }).split('/').reverse().join('-')
    :
    new Date().toLocaleDateString('en-US', {year: "numeric", month: "2-digit", day: "2-digit", }).split('/').reverse().join('-')
}

export function formatColumn(column: string): string
{
  return column.replaceAll("_", " ").toUpperCase()
}

export function shouldOrder(filteredArray: Object[], filteredColumn: string, filterOrder: string): Object[]
{
  let t: Object[] = filteredArray

  t.sort((i1: GenericObjectKeyType, i2: GenericObjectKeyType) => {
    console.log(i1[filteredColumn] < i2[filteredColumn], String(i1[filteredColumn]), String(i2[filteredColumn]))
    if (i1[filteredColumn] < i2[filteredColumn]) {
      return -1
    }

    if (i1[filteredColumn] > i2[filteredColumn]) {
      return 1
    }

    return 0
  })

  if (filterOrder === 'desc') {
    console.log('reverse')
    t.reverse()
  }
  
  return t
}

export function conditionalComparison(a: string[], operator: string): boolean
{
  switch (operator) {
    case 'contains':
      return String(a[0]).toLowerCase().includes(String(a[1]).toLowerCase())
  
    case 'equals':
      return String(a[0]).toLowerCase() === String(a[1]).toLowerCase()

    default:
      console.log('eeeeeee')
      return false
  }
}
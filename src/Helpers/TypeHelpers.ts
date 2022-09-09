export interface textFieldInterface {
  value: string|""
  type?: string
  invalid: boolean
  errorMessage: string|null
}

export interface GenericObjectKeyType {
  [key: string]: any
}
import { SetorColumn } from "./SetorColumn"

export interface UserProps {
  id: number
  name: string
  email: string
}
export interface textFieldInterface {
  value: string|""
  type?: string
  invalid: boolean
  errorMessage: string|null
}

export interface GenericObjectKeyType {
  [key: string]: any
}

export interface OrderingProps {
  column: string
  ordering: string
}

export interface TableContextProps {
  loading: boolean
  data: dataListType
  checkboxes: CheckboxProps
  searchParams: {[key: string]: any}
  loadSearchParams: (statusFilter: Object) => void
  ordering: (colunaFiltrada: string) => void
  loadData: (data: Array<Object>) => void
  setLoading: (p: boolean) => void
}

export interface CheckboxProps {
  [key: string]: any;
}

export interface dataListType {
  list: Object[]
  filteredList: Object[]
  new: Object[]
}

export interface TableProps {
  ColumnHeaders: Array<string>
  RowData?: Array<Object>
  Sortable?: boolean
  Theme?: "light"|"dark"
  Striped?: boolean
  showCheckbox?: boolean
}

export interface ProviderProps {
  children: React.ReactNode
}
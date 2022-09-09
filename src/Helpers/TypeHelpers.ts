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
  handleCheckBox: (event: React.ChangeEvent<HTMLInputElement>, all?: boolean) => void
  statusFilter: {[key: string]: any}
  loadStatusFilter: (statusFilter: Object) => void
  ordering: (colunaFiltrada: string) => void
  loadData: (data: Array<Object>) => void
  handleInputSearch: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, reloadData?: boolean) => void
  handleDataAddition: (dataAdded: string[]) => void
}

export interface CheckboxProps {
  [key: string]: any;
}

export interface dataListType {
  list: Object[]
  filteredList: Object[]
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
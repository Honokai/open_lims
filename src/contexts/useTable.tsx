import React from "react"

interface CheckboxProps {
  [key: string]: any;
}

interface ContextProps {
  data: Object[]
  checkboxes: CheckboxProps
  handleCheckBox: (event: React.ChangeEvent<HTMLInputElement>, all?: boolean) => void
  statusFilter: {[key: string]: any}
  loadStatusFilter: (statusFilter: Object) => void
  ordering: (colunaFiltrada: string) => void
  loadData: (data: Array<Object>) => void
  handleInputSearch: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
}

interface ProviderProps {
  children: React.ReactNode
}

const TableContext = React.createContext<ContextProps>({} as ContextProps)

export const TableContextProvider = ({ children }: ProviderProps) => {
  const [ data, setData ] = React.useState<Array<Object>>([{}])
  const [ checkboxes, setCheckboxes ] = React.useState<CheckboxProps>({checkAll: false});
  const [ statusFilter, setStatusFilter ] = React.useState<{[key: string]: any}>({search: {}});

  React.useEffect(() => {
    console.log("Renderizei")
  }, [])

  function handleCheckBox(event: React.ChangeEvent<HTMLInputElement>, all = false) {
    event && !all ? setCheckboxes({
      ...checkboxes,
      [event.currentTarget.id]: event.currentTarget.checked
    }) : setCheckboxes({
      ...checkboxes,
      checkAll: event.currentTarget.checked
    })
  }

  function loadStatusFilter(filters: Object)
  {
    setStatusFilter(filters)
  }

  function loadData(d: Array<Object>)
  {
    setData(d)
  }

  function ordering(colunaFiltrada: string)
  {
    let t: Object[] = []

    Object.assign(t, data)

    t.sort((i1, i2) => {
      // @ts-ignore: Unreachable code error 
      if (i1[colunaFiltrada] < i2[colunaFiltrada]) {
        return -1
      }
      // @ts-ignore: Unreachable code error
      if (i1[colunaFiltrada] > i2[colunaFiltrada]) {
        return 1
      }

      return 0
    })
    // @ts-ignore: Unreachable code error
    if (statusFilter[colunaFiltrada]?.order === "asc") {
      t.reverse()
    }

    setData(t)

    setStatusFilter({
      ...statusFilter,
      [colunaFiltrada]: {
        // @ts-ignore: Unreachable code error
        order: statusFilter[colunaFiltrada]?.order === "asc" ? "desc" : "asc",
        search: ""
      }
    })
  }

  function handleInputSearch(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setStatusFilter({
      ...statusFilter,
      search: {
        ...statusFilter.search,
        [event.target.name]: event.target.value
      }
    })
  }

  return(
      <TableContext.Provider value={{handleInputSearch, data, checkboxes, handleCheckBox, statusFilter, loadStatusFilter, ordering, loadData}}>
        {children}
      </TableContext.Provider>
  )
}

export const useTable = () => {
  const context = React.useContext(TableContext)
  
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context
} 

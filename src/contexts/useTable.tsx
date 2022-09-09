import React from "react"
import { GenericObjectKeyType } from "../Helpers/TypeHelpers";

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
  handleInputSearch: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, reloadData?: boolean) => void
  handleDataAddition: (dataAdded: string[]) => void
}

interface ProviderProps {
  children: React.ReactNode
}

const TableContext = React.createContext<ContextProps>({} as ContextProps)

export const TableContextProvider = ({ children }: ProviderProps) => {
  const [originalData, setOriginalData] = React.useState<Array<Object>>([{}])
  const [ data, setData ] = React.useState<Array<Object>>([{}])
  const [ checkboxes, setCheckboxes ] = React.useState<CheckboxProps>({checkAll: false});
  const [ statusFilter, setStatusFilter ] = React.useState<{[key: string]: any}>({search: {}});

  React.useEffect(() => {
    if(Object.keys(statusFilter.search).length) {
      let ob: Object[] = []

      Object.assign(ob, data)
  
      let o = ob.filter((item: GenericObjectKeyType) => {
        let filtersCount = Object.values(statusFilter.search).filter(x => x !== '').length

        let c = Object.entries(statusFilter.search).filter((val) => {
          return String(item[val[0]]).toLowerCase() === String(val[1]).toLowerCase()
        })

        return c.length === filtersCount ? true : false
      })
  
      setData(o) 
    }
    
  }, [statusFilter])

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
    setOriginalData(d)
    setData(d)
  }

  function ordering(colunaFiltrada: string)
  {
    let t: Object[] = []

    Object.assign(t, data)

    t.sort((i1: GenericObjectKeyType, i2: GenericObjectKeyType) => {
      if (i1[colunaFiltrada] < i2[colunaFiltrada]) {
        return -1
      }

      if (i1[colunaFiltrada] > i2[colunaFiltrada]) {
        return 1
      }

      return 0
    })

    if (statusFilter[colunaFiltrada]?.order === "asc") {
      t.reverse()
    }

    setData(t)

    setStatusFilter({
      ...statusFilter,
      [colunaFiltrada]: {
        order: statusFilter[colunaFiltrada]?.order === "asc" ? "desc" : "asc",
        search: ""
      }
    })
  }

  function handleDataAddition(dataAdded: string[])
  {
    let b = {}
    let t: Object[] = []

    dataAdded.forEach((val) => {
      Object.assign(b, {[val]: ""})
    })

    t = t.concat(data).concat(b)

    setData(t)
  }

  function handleInputSearch(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, reload?: boolean) {
    if (reload)
      loadData(originalData)

    setStatusFilter({
      ...statusFilter,
      search: {
        ...statusFilter.search,
        [event.target.name]: event.target.value
      }
    })
  }

  return(
      <TableContext.Provider value={{handleDataAddition, handleInputSearch, data, checkboxes, handleCheckBox, statusFilter, loadStatusFilter, ordering, loadData}}>
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

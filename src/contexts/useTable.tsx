import React from "react"
import { shouldOrder } from "../Helpers/Functions";
import { CheckboxProps, dataListType, GenericObjectKeyType, OrderingProps, ProviderProps, TableContextProps } from "../Helpers/TypeHelpers";

const TableContext = React.createContext<TableContextProps>({} as TableContextProps)

export const TableContextProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = React.useState(false)
  const [ data, setData ] = React.useState<dataListType>({list: [], filteredList: []} as dataListType)
  const [ checkboxes, setCheckboxes ] = React.useState<CheckboxProps>({checkAll: false});
  const [resultOrdering, setResultOrdering] = React.useState<OrderingProps>({column: '', ordering: 'asc'})
  const [ statusFilter, setStatusFilter ] = React.useState<GenericObjectKeyType>({search: {}});

  React.useEffect(() => {
    if(Object.keys(statusFilter.search).length ) {
      let ob: Object[] = []

      Object.assign(ob, data.list)

      let o = ob.filter((item: GenericObjectKeyType) => {
        let filtersCount = Object.values(statusFilter.search).filter(x => x !== '').length

        let c = Object.entries(statusFilter.search).filter((val) => {
          return String(item[val[0]]).toLowerCase() === String(val[1]).toLowerCase()
        })

        return c.length === filtersCount ? true : false
      })

      setData({...data, filteredList: o})
      setLoading(false)
    }
  }, [statusFilter])

  React.useEffect(() => {
    if (resultOrdering.column !== '') {
      setData({
        ...data,
        filteredList: shouldOrder(data.filteredList, resultOrdering.column, resultOrdering.ordering)
      })
    }
  }, [resultOrdering])

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
    setData({filteredList: d, list: d})
  }

  function ordering(colunaOrdenada: string)
  {
    setResultOrdering({
      column: colunaOrdenada,
      ordering: resultOrdering.ordering !== 'asc' ? 'asc' : 'desc'
    })
  }

  function handleDataAddition(dataAdded: string[])
  {
    // let b = {}
    // let t: Object[] = []

    // dataAdded.forEach((val) => {
    //   Object.assign(b, {[val]: ""})
    // })

    // t = t.concat(data).concat(b)

    // setData(t)
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
      <TableContext.Provider value={{setLoading, loading, handleDataAddition, handleInputSearch, data, checkboxes, handleCheckBox, statusFilter, loadStatusFilter, ordering, loadData}}>
        {children}
      </TableContext.Provider>
  )
}

export const useTable = () => {
  const context = React.useContext(TableContext)

  return context
} 

import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Checkbox, Button } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import React from "react";
import { conditionalComparison, shouldOrder, whereIn } from "../../Helpers/Functions";
import { dataListType, DataPropsGeneric, GenericObjectKeyType, TableProps } from "../../Helpers/TypeHelpers";
import { InputFilter } from "./InputsFilter";
import ButtonLoading from "./ButtonLoading";
import { DivContentTable, DivLikeTable, DivLikeTbody, DivLikeThead } from "../../Helpers/StyledTags";
import { TableRow } from "./TableRow";
import { useLocation, useNavigate } from "react-router-dom";

const Table = ({RowData, Sortable, Theme, Striped, showCheckbox, Entity}: TableProps) => {
  const [ data, setData ] = React.useState<dataListType>({list: RowData ?? [], filteredList: RowData ?? [], new: []})
  const [ componentState, setComponentState ] = React.useState({loading: false, checkAll: false, checkBoxes: {} as GenericObjectKeyType, search: {} as GenericObjectKeyType, condition: {} as GenericObjectKeyType, ordering: {column: '', order: 'asc'}})
  const tableBody = React.useRef<HTMLDivElement|null>(null);
  const navigate = useNavigate()
  const { state }: GenericObjectKeyType = useLocation()

  React.useEffect(() => {
    if(RowData)
      setData({...data, list: RowData, filteredList: RowData})
    else 
      console.log(state)
  }, [RowData])

  React.useEffect(() => {
    if(Object.keys(componentState.search).length) {
      let dataCopy: Object[] = []

      Object.assign(dataCopy, data.list)

      let filtersCount = Object.values(componentState.search).filter(x => x !== '').length
      if (filtersCount > 0) {
        let dataFiltered = dataCopy.filter((item: GenericObjectKeyType) => {
          let c = Object.entries(componentState.search).filter((val) => {
            return conditionalComparison([item[val[0]], val[1]], componentState.condition[val[0]])
          })

          return c.length === filtersCount ? true : false
        })

        setData({
            ...data,
            filteredList: dataFiltered
        })
      } else {
        setData({
          ...data,
          filteredList: dataCopy
        })
      }

      setComponentState({...componentState, loading: false})
    }
  }, [componentState.search])

  React.useEffect(() => {
    if (componentState.ordering.column !== '') {
      setData({
        ...data,
        filteredList: shouldOrder(data.filteredList, componentState.ordering.column, componentState.ordering.order)
      })
    }
  }, [componentState.ordering])

  function ordering(colunaOrdenada: string)
  {
    setComponentState({...componentState,
      ordering: {
        column: colunaOrdenada,
        order: componentState.ordering.order !== 'asc' ? 'asc' : 'desc'
      }
    })
  }

  function handleCheckBox(event: React.ChangeEvent<HTMLInputElement>, all?: 'check'|'uncheck') {
    if (event && !all) {
      setComponentState({
        ...componentState,
        checkBoxes: {
          ...componentState.checkBoxes,
          [event.currentTarget.id]: event.currentTarget.checked}
      })
    } else {
      let checkBoxesCopy = Object.assign({}, componentState.checkBoxes)

      let allCheckBoxes: NodeListOf<HTMLInputElement>  = document.querySelectorAll("input[type='checkbox'][id]")
      allCheckBoxes.forEach((item) => {
        checkBoxesCopy[item.id] = all === 'uncheck' ? false : true
      })

      setComponentState({
        ...state,
        checkAll: !componentState.checkAll,
        checkBoxes: checkBoxesCopy
      })
    }
  }

  function handleInputSearch(e: string[]) {
    setComponentState({
      ...state,
      search: {
        [e[0]]: e[1],
      },
      condition: {
        [e[0]]: e[2]
      }
    })
  }

  function handleDataAddition(dataAdded?: string[])
  {
    let o = Object.assign({}, data)

    let b = {}
    let t: Object[] = []

    // dataAdded.forEach((val) => {
    //   Object.assign(b, {[val]: ""})
    // })

    // t = t.concat(data).concat(b)

    // setData(t)
  }

  function showChecked()
  {
    let marked: number[] = []
    Object.entries(componentState.checkBoxes).forEach(v => {
      if (v[1] === true)
        marked.push(Number(v[0]))
    })

    navigate("sample/schedule", {state: { schedule: whereIn('id', marked, data.filteredList) ?? null}})
  }

  return (
    <DivLikeTable>
      <Button sx={{margin: "0 .3rem"}} onClick={showChecked} variant="contained">Iniciar</Button>
      <Button sx={{margin: "0 .3rem"}} onClick={() => handleDataAddition()} variant="contained">Save</Button>
      <ButtonLoading/>
      <DivLikeThead>
      {
        showCheckbox ? (
          <div>
            <Checkbox
              key={`all`}
              value={componentState.checkAll}
              onChange={(e) => handleCheckBox(e, componentState.checkAll ? 'uncheck' : 'check')}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>
        ): ""
      }
      {
        Entity?.getDataFields().map((columnName) => {
          return (
            <DivContentTable key={columnName.field}>
              {columnName.display}
              {
                Sortable ? (
                  <IconButton disableRipple component="label" key={`${columnName.field}[button]`} size="small" onClick={() => ordering(columnName.field)}>
                    <ArrowDownward/>
                  </IconButton>
                ) : ""
              }
            </DivContentTable>
          )
        })
      }
      </DivLikeThead>
      <DivLikeThead>
        {
          showCheckbox ? (
            <DivContentTable>
            
            </DivContentTable>
          ): ""
        }
        {
          Entity.getDataFields().map((columnName) => {
            return (
              <InputFilter 
                selectValue={componentState.condition[columnName.field] ?? ""} 
                inputValue={componentState.search[columnName.field] ?? ""} 
                parentChangeHandler={(e) => handleInputSearch(e)} 
                key={`inputFilter[${columnName.field}]`}
                columnName={columnName}
              />
            )
          })
        }
      </DivLikeThead>
      <DivLikeTbody id="tableBody" ref={tableBody}>
      {
        data.filteredList.length > 0 ?
          data.filteredList.map((item: DataPropsGeneric, index) => (
            <TableRow key={`row[${index}]`} index={index} item={item} showCheckbox={showCheckbox} handleCheckBox={handleCheckBox} checked={componentState.checkBoxes[`${item['id']}`]}/>
          )) :
          Object.values(componentState.search).filter(x => x !== '').length > 0 && data.list.length > 0?
            <DivContentTable>
              No results to filter
            </DivContentTable> :
            <>
              <Skeleton variant="rectangular" sx={{ fontSize: '2rem', margin: ".3rem 0" }} />
              <Skeleton variant="rectangular" sx={{ fontSize: '2rem', margin: ".3rem 0" }} />
              <Skeleton variant="rectangular" sx={{ fontSize: '2rem', margin: ".3rem 0" }} />
            </>
      }
      </DivLikeTbody>
      <div>
        <h4>
          Exibindo {data.filteredList?.length}
        </h4>
      </div>
    </DivLikeTable>
  )
}

export default Table
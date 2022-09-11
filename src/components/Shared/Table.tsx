import styled from "@emotion/styled";
import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Checkbox, Button } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import React from "react";
import { conditionalComparison, formatColumn, shouldOrder } from "../../Helpers/Functions";
import { dataListType, dataPropsGeneric, GenericObjectKeyType, TableProps } from "../../Helpers/TypeHelpers";
import { InputFilter } from "./InputsFilter";
import ButtonLoading from "./ButtonLoading";
import { DivContentTable, DivLikeTable, DivLikeTbody, DivLikeThead } from "../../Helpers/StyledTags";
import { TableRow } from "./TableRow";

const Table = ({ColumnHeaders, RowData, Sortable, Theme, Striped, showCheckbox, Entity}: TableProps) => {
  const [ data, setData ] = React.useState<dataListType>({list: [], filteredList: [], new: []})
  const [ state, setState ] = React.useState({loading: false, checkAll: false, checkBoxes: {} as GenericObjectKeyType, search: {} as GenericObjectKeyType, condition: {} as GenericObjectKeyType, ordering: {column: '', order: 'asc'}})
  const tableBody = React.useRef<HTMLDivElement|null>(null);

  React.useEffect(() => {
    if(RowData)
      setData({...data, list: RowData, filteredList: RowData})
  }, [RowData])

  React.useEffect(() => {
    if(Object.keys(state.search).length) {
      let ob: Object[] = []

      Object.assign(ob, data.list)

      let filtersCount = Object.values(state.search).filter(x => x !== '').length
      if (filtersCount > 0) {
        let o = ob.filter((item: GenericObjectKeyType) => {
          let c = Object.entries(state.search).filter((val) => {
            return conditionalComparison([item[val[0]], val[1]], state.condition[val[0]])
          })

          return c.length === filtersCount ? true : false
        })

        setData({
            ...data,
            filteredList: o
        })
      } else {
        setData({
          ...data,
          filteredList: ob
        })
      }

      setState({...state, loading: false})
    }
  }, [state.search])

  React.useEffect(() => {
    if (state.ordering.column !== '') {
      setData({
        ...data,
        filteredList: shouldOrder(data.filteredList, state.ordering.column, state.ordering.order)
      })
    }
  }, [state.ordering])

  function ordering(colunaOrdenada: string)
  {
    setState({...state,
      ordering: {
        column: colunaOrdenada,
        order: state.ordering.order !== 'asc' ? 'asc' : 'desc'
      }
    })
  }

  function handleCheckBox(event: React.ChangeEvent<HTMLInputElement>, all?: 'check'|'uncheck') {
    if (event && !all) {
      setState({
        ...state,
        checkBoxes: {
          ...state.checkBoxes,
          [event.currentTarget.id]: event.currentTarget.checked}
      })
    } else {
      let checkBoxesCopy = Object.assign({}, state.checkBoxes)

      let allCheckBoxes: NodeListOf<HTMLInputElement>  = document.querySelectorAll("[id^='checkbox']")
      allCheckBoxes.forEach((item) => {
        checkBoxesCopy[item.id] = all === 'uncheck' ? false : true
      })

      setState({
        ...state,
        checkAll: !state.checkAll,
        checkBoxes: checkBoxesCopy
      })
    }
  }

  function handleInputSearch(e: string[]) {
    setState({
      ...state,
      search: {
        [e[0]]: e[1],
      },
      condition: {
        [e[0]]: e[2]
      }
    })
  }

  function addRow()
  {
    let d = document.createElement('div')
    d.style.display = "flex"

    if (showCheckbox) {
      let t = document.createElement('div')
      t.style.flex = "1"
      d.append(t)
    }
    
    ColumnHeaders.forEach(i => {
      let c = document.createElement('div')
      c.innerHTML = i
      c.style.flex = "1"
      d.appendChild(c)
    })

    // handleDataAddition(ColumnHeaders)

    tableBody.current?.appendChild(d)
  }

  function handleDataAddition(dataAdded?: string[])
  {
    let o = Object.assign({}, data)

    console.log(o.filteredList.push(Object.values(ColumnHeaders).map(e => {return {e: ''}})))
    console.log(o)
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
    // let = Object.entries(state.checkBoxes).
  }

  return (
    <DivLikeTable>
      <Button sx={{margin: "0 .3rem"}} onClick={addRow} variant="contained">Add row</Button>
      <Button sx={{margin: "0 .3rem"}} onClick={() => handleDataAddition()} variant="contained">Save</Button>
      <ButtonLoading/>
      <DivLikeThead>
      {
        showCheckbox ? (
          <div>
            <Checkbox
              key={`all`}
              value={state.checkAll}
              onChange={(e) => handleCheckBox(e, state.checkAll ? 'uncheck' : 'check')}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>
        ): ""
      }
      {
        Entity?.getColumnNames().map((columnName, index) => {
          return (
            <DivContentTable key={columnName}>
              {columnName}
              {
                Sortable ? (
                  <IconButton disableRipple component="label" key={`${columnName}[button]`} size="small" onClick={() => ordering(columnName.toLowerCase())}>
                    <ArrowDownward/>
                  </IconButton>
                ) : ""
              }
            </DivContentTable>
          )
        })
      }
      {/* {
        ColumnHeaders.map((columnName, index) => {
          return (
            <DivContentTable key={columnName}>
              {formatColumn(columnName)}
              {
                Sortable ? (
                  <IconButton disableRipple component="label" key={`${columnName}[button]`} size="small" onClick={() => ordering(columnName.toLowerCase())}>
                    <ArrowDownward/>
                  </IconButton>
                ) : ""
              }
            </DivContentTable>
          )
        })
      } */}
      </DivLikeThead>
      <DivLikeThead>
        {
          showCheckbox ? (
            <DivContentTable>
            
            </DivContentTable>
          ): ""
        }
        {
          Entity?.getDataFields().map((columnName, index) => {
            return (
              <InputFilter selectValue={state.condition[columnName] ?? ""} inputValue={state.search[columnName] ?? ""} parentChangeHandler={(e) => handleInputSearch(e)} key={`inputFilter[${columnName}]`} columnName={columnName}/>
            )
          })
        }
        {/* {
          ColumnHeaders.map((columnName, index) => {
            return (
              <InputFilter selectValue={state.condition[columnName] ?? ""} inputValue={state.search[columnName] ?? ""} parentChangeHandler={(e) => handleInputSearch(e)} key={`inputFilter[${columnName}]`} columnName={columnName}/>
            )
          })
        } */}
      </DivLikeThead>
      <DivLikeTbody id="tableBody" ref={tableBody}>
      {
        data.filteredList.length > 0 ?
          data.filteredList.map((item: dataPropsGeneric, index) => (
            <TableRow key={`row[${index}]`} index={index} item={item} showCheckbox={showCheckbox} handleCheckBox={handleCheckBox} checked={state.checkBoxes[`checkbox[${item['id']}]`]}/>
          )) : 
          Object.values(state.search).filter(x => x !== '').length > 0 ?
            <DivContentTable>
              No results to filter
            </DivContentTable> :
            <Skeleton variant="rectangular" sx={{ fontSize: '3rem' }} />
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
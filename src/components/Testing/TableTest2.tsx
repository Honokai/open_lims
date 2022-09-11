import styled from "@emotion/styled";
import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Checkbox, Button } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import React from "react";
import { useTable } from "../../contexts/useTable";
import { formatColumn, shouldOrder } from "../../Helpers/Functions";
import { dataListType, GenericObjectKeyType, TableProps } from "../../Helpers/TypeHelpers";
import ButtonLoading from "../Shared/ButtonLoading";
import { DivContentTable } from "../../Helpers/StyledTags";
import { InputFilter2 } from "./InputFilter2";

const DivLikeThead = styled.div`
  padding: .3rem 0;
  display: flex;
  text-align: center;
  border-bottom: 2px solid gray;
  & * {
    flex: 1;
  }
`

const DivLikeTbody = styled.div`
  margin: .3rem 0;
  display: flex;
  // height: 85%;
  flex-direction: column;
  text-align: center;
  // overflow: auto;
`

const DivLikeRow = styled.div`
  display: flex;
  flex: 1;
  border-radius: 0.2rem;
`

interface CheckboxProps {
  [key: string]: any;
}

const TableTest2 = ({ColumnHeaders, RowData, Sortable, Theme, Striped, showCheckbox}: TableProps) => {
  const [ data, setData ] = React.useState<dataListType>({list: [], filteredList: [], new: []})
  const [ state, setState ] = React.useState({loading: false, search: {} as GenericObjectKeyType, ordering: {column: '', order: 'asc'}})
  const tableBody = React.useRef<HTMLDivElement|null>(null);

  React.useEffect(() => {
    if(RowData)
      setData({...data, list: RowData, filteredList: RowData})
  }, [RowData])

  React.useEffect(() => {
    if(Object.keys(state.search).length ) {
      let ob: Object[] = []

      Object.assign(ob, data.list)

      let o = ob.filter((item: GenericObjectKeyType) => {
        let filtersCount = Object.values(state.search).filter(x => x !== '').length

        let c = Object.entries(state.search).filter((val) => {
          return String(item[val[0]]).toLowerCase() === String(val[1]).toLowerCase()
        })

        return c.length === filtersCount ? true : false
      })
      console.log(state)
      setData({
          ...data,
          filteredList: o
      })
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

  function handleInputSearch(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    console.log('passei pela funcao da tabela 2')
    setState({
      ...state,
      search: {
        ...state.search,
        [event.target.name]: event.target.value
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

  const DivLikeTable = styled.div`
    flex: 1;
    min-width: 500px;
    margin: 0 1rem;
    padding: .5rem 1rem;
    border-radius: .2rem;
    border: 1px solid gray;
    // overflow: hidden;
    // #body > div:nth-of-type(even) {
    //   background-color: ${Theme === 'light' ? "#d4d4d4" : "rgba(77,77,77,0.8)"};
    //   color: ${Theme === 'light' ? "inherit" : "#fff"};
    // }
  `

  return (
    <DivLikeTable>
      <Button sx={{margin: "0 .3rem"}} onClick={addRow} variant="contained">Add row</Button>
      <ButtonLoading/>
      <DivLikeThead>
        {
          showCheckbox ? (
            <div>
              <Checkbox
                key={`all`}
                // checked={checkboxes?.checkAll}
                // onChange={(e) => handleCheckBox(e, true)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
          ): ""
        }
      
      {
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
          ColumnHeaders.map((columnName, index) => {
            return (
              <InputFilter2 value={state.search[columnName] ?? ""} parentChangeHandler={(e) => handleInputSearch(e)} key={`inputFilter[${columnName}]`} columnName={columnName}/>
            )
          })
        }
      </DivLikeThead>
      <DivLikeTbody id="tableBody" ref={tableBody}>
      {
        data.filteredList.length > 0 ?
          data.filteredList.map((item, index) => (
            <DivLikeRow key={`row[${index}]`}>
              {
                showCheckbox ? (
                  <DivContentTable>
                    <Checkbox
                      disableRipple
                      key={`checkbox[${index}]`}
                      id={`checkbox[${index}]`}
                      value={index}
                      // checked={checkboxes[`checkbox[${index}]`] ?? checkboxes.checkAll ?? false}
                      // onChange={(e) => handleCheckBox(e)}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </DivContentTable>
                ) : ""
              }
              {
                Object.entries(item).map((v, i) => {
                  return (
                    <DivContentTable key={`rowContent[${index}][${i}]`} id={`${index}[${i}]`}>
                      {v[1]}
                    </DivContentTable>
                  )
                })
              }
            </DivLikeRow>
          )) : 
          Object.values(state.search).filter(x => x !== '').length > 0 ?
            <DivContentTable>
              No results to filter
            </DivContentTable> :
            <Skeleton variant="rectangular" sx={{ fontSize: '3rem' }} />
      }
      </DivLikeTbody>
      {/* <TableBody data={data.filteredList} search={state.search}/> */}
      <div>
        <h4>
          Exibindo {data.filteredList?.length}
        </h4>
      </div>
    </DivLikeTable>
  )
}

export default TableTest2
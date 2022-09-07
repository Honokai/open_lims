import styled from "@emotion/styled";
import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import { useTable } from "../../contexts/useTable";
import { FormatColumn } from "../../Helpers/Functions";

interface TableProps {
  ColumnHeaders: Array<string>
  RowData: Array<Object>
  Sortable?: boolean
  Theme?: "light"|"dark"
  Striped?: boolean
}

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
  border-radius: 0.2rem;
  * {
    flex: 1;
  }
`

interface CheckboxProps {
  [key: string]: any;
}

const Table = ({ColumnHeaders, RowData, Sortable, Theme, Striped}: TableProps) => {
  const {data, loadData, ordering, checkboxes, handleCheckBox, loadStatusFilter} = useTable()
  // const [ data, setData ] = React.useState(RowData)
  // const [ checkboxes, setCheckboxes ] = React.useState<CheckboxProps>({checkAll: false});
  // const [ statusFilter, setStatusFilter ] = React.useState<Object>(ColumnHeaders);
  
  React.useEffect(() => {
    console.log(typeof RowData)
    loadStatusFilter(ColumnHeaders)
    loadData(RowData)
  }, [])

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

  // function ordering(colunaFiltrada: string)
  // {
  //   let t: Object[] = []

  //   Object.assign(t, data)

  //   t.sort((i1, i2) => {
  //     // @ts-ignore: Unreachable code error 
  //     if (i1[colunaFiltrada] < i2[colunaFiltrada]) {
  //       return -1
  //     }
  //     // @ts-ignore: Unreachable code error
  //     if (i1[colunaFiltrada] > i2[colunaFiltrada]) {
  //       return 1
  //     }

  //     return 0
  //   })
  //   // @ts-ignore: Unreachable code error
  //   if (statusFilter[colunaFiltrada]?.order === "asc") {
  //     t.reverse()
  //   }

  //   setData(t)

  //   setStatusFilter({
  //     ...statusFilter,
  //     [colunaFiltrada]: {
  //       // @ts-ignore: Unreachable code error
  //       order: statusFilter[colunaFiltrada]?.order === "asc" ? "desc" : "asc",
  //       search: ""
  //     }
  //   })
  // }

  // function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>, all = false) 
  // {
  //   event && !all ? setCheckboxes({
  //     ...checkboxes,
  //     [event.currentTarget.id]: event.currentTarget.checked
  //   }) : setCheckboxes({
  //     ...checkboxes,
  //     checkAll: event.currentTarget.checked
  //   })

  //   console.log(checkboxes, event.currentTarget.id)
  // }

  return (
    <DivLikeTable>
      <DivLikeThead>
      <div>
        <Checkbox
          key={`all`}
          checked={checkboxes?.checkAll}
          onChange={(e) => handleCheckBox(e, true)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      {
        ColumnHeaders.map((columnName, index) => {
          return (
            <div key={columnName}>
              {FormatColumn(columnName)}
              {
                Sortable ? (
                  <IconButton disableRipple component="label" key={`${columnName}[button]`} size="small" onClick={(e) => ordering(columnName.toLowerCase())}>
                    <ArrowDownward/>
                  </IconButton>
                ) : ""
              }
            </div>
          )
        })
      }
      </DivLikeThead>
      <DivLikeTbody id="body">
      {
        data.map((item, index) => (
          <DivLikeRow key={`row[${index}]`}>
            <div>
              <Checkbox
                disableRipple
                key={`checkbox[${index}]`}
                id={`checkbox[${index}]`}
                value={index}
                checked={checkboxes[`checkbox[${index}]`] ?? checkboxes.checkAll ?? false}
                onChange={(e) => handleCheckBox(e)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
          {
            Object.entries(item).map((v, i) => {
              return (
                <div key={`rowContent[${index}][${i}]`} id={`${index}[${i}]`}>
                  {v[1]}
                </div>
              )
            })
          }
          </DivLikeRow>
        ))
      }
      </DivLikeTbody>
      <div>
        <h4>
          Exibindo {RowData.length}
        </h4>
      </div>
    </DivLikeTable>
  )
}

export default Table
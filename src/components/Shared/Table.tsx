import styled from "@emotion/styled";
import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Checkbox, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useTable } from "../../contexts/useTable";
import { FormatColumn } from "../../Helpers/Functions";
import { InputFilter } from "./InputsFilter";

interface TableProps {
  ColumnHeaders: Array<string>
  RowData: Array<Object>
  Sortable?: boolean
  Theme?: "light"|"dark"
  Striped?: boolean
  showCheckbox?: boolean
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

const Table = ({ColumnHeaders, RowData, Sortable, Theme, Striped, showCheckbox}: TableProps) => {
  const { data, loadData, ordering, checkboxes, handleCheckBox, statusFilter, loadStatusFilter} = useTable()
  const [ timer, setTimer ] = React.useState(0);
  // const [searchColumns, setSearchColumns] = React.useState(ColumnHeaders)

  React.useEffect(() => {
    loadStatusFilter({...statusFilter, ColumnHeaders})
    loadData(RowData)
  }, [RowData])

  // function handleInputSearch(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  // {
  //   setSearchInput(event.currentTarget.value)
  //   search(event)
  // }
  function search(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    clearTimeout(timer)

    setTimer(setTimeout(() => {
      console.log(event)
    }, 5000, event))
  }

  function originalData()
  {
    console.log(RowData)
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
      <Button onClick={originalData}>Original data</Button>
      <DivLikeThead>
        {
          showCheckbox ? (
            <div>
            <Checkbox
              key={`all`}
              checked={checkboxes?.checkAll}
              onChange={(e) => handleCheckBox(e, true)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>
          ): ""
        }
      
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
      <DivLikeThead>
        {
          showCheckbox ? (
            <div>
            
            </div>
          ): ""
        }
        {
          ColumnHeaders.map((columnName, index) => {
            return (
              <InputFilter value={statusFilter.search[columnName] ?? null} key={`inputFilter[${columnName}]`} columnName={columnName}/>
            )
          })
        }
      </DivLikeThead>
      <DivLikeTbody id="body">
      {
        data.map((item, index) => (
          <DivLikeRow key={`row[${index}]`}>
            {
              showCheckbox ? (
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
              ) : ""
            }
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
          Exibindo {data.length}
        </h4>
      </div>
    </DivLikeTable>
  )
}

export default Table
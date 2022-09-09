import styled from "@emotion/styled";
import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Checkbox, TextField, Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Skeleton from '@mui/material/Skeleton';
import React from "react";
import { useTable } from "../../contexts/useTable";
import { FormatColumn } from "../../Helpers/Functions";
import { TableProps } from "../../Helpers/TypeHelpers";
import { InputFilter } from "./InputsFilter";

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
  const { data, handleDataAddition, loadData, ordering, checkboxes, handleCheckBox, statusFilter, loadStatusFilter} = useTable()
  const tableBody = React.useRef<HTMLDivElement|null>(null);

  React.useEffect(() => {
    loadStatusFilter({...statusFilter, ColumnHeaders})
    loadData(RowData ?? [])
  }, [RowData])

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

    handleDataAddition(ColumnHeaders)

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
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
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
                  <IconButton disableRipple component="label" key={`${columnName}[button]`} size="small" onClick={() => ordering(columnName.toLowerCase())}>
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
              <InputFilter key={`inputFilter[${columnName}]`} columnName={columnName}/>
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
        )) : 
        Object.values(statusFilter.search).filter(x => x !== '').length > 0 ?
          <div>
            No results to filter
          </div> :
          <Skeleton variant="rectangular" sx={{ fontSize: '3rem' }} />
      }
      </DivLikeTbody>
      <div>
        <h4>
          Exibindo {data.filteredList.length}
        </h4>
      </div>
    </DivLikeTable>
  )
}

export default Table
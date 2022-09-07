import styled from "@emotion/styled";
import { ArrowDownward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

interface TableProps {
  ColumnHeaders: Array<string>
  RowData: Array<Object>
  Sortable?: boolean
  Theme: "light"|"dark"
}

const Table = ({ColumnHeaders, RowData, Sortable, Theme}: TableProps) => {
  const [ data, setData ] = React.useState(RowData)
  const [ statusFilter, setStatusFilter ] = React.useState<Object>(ColumnHeaders);

  const DivLikeTable = styled.div`
    flex: 1;
    margin: 0 1rem;
    padding: .5rem 1rem;
    border-radius: .2rem;
    border: 1px solid gray;
    overflow: auto;
    #body > div:nth-child(even) {
      background-color: ${Theme === 'light' ? "#d4d4d4" : "rgba(77,77,77,0.8)"};
      color: ${Theme === 'light' ? "inherit" : "#fff"};
    }
`

const DivLikeThead = styled.div`
  padding: .3rem 0;
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  border-bottom: 2px solid gray;
`

const DivLikeTbody = styled.div`
  margin: .3rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const DivLikeRow = styled.div`
  display: flex;
  border-radius: 0.2rem;
  * {
    flex: 1;
  }
`

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
        order: [statusFilter[colunaFiltrada]?.order] === "asc" ? "desc" : "asc",
        search: ""
      }
    })
  }

  return (
    <DivLikeTable>
      <DivLikeThead>
      {
        ColumnHeaders.map((columnName, index) => {
          return (
            <div key={columnName}>
              {columnName}
              {
                Sortable ? (
                  <IconButton key={`${columnName}[button]`} size="small" onClick={(e) => ordering(columnName.toLowerCase())}>
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
          <DivLikeRow key={`${index}`}>
          {
            Object.entries(item).map((v, i) => {
              return (
                <div key={`${index}[${i}]`} id={`${index}[${i}]`}>
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
        <h4 >
          Exibindo {RowData.length}
        </h4>
      </div>
    </DivLikeTable>
  )
}

export default Table
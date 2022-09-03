import styled from "@emotion/styled"
import { ArrowDownward } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import React, { CSSProperties, useEffect } from "react"

interface TableProps {
  ColumnHeaders: Array<string>
  RowData: Array<Object>
  Sortable?: boolean
}

const DivLikeTable = styled.div`
  flex: 1;
  padding: .5rem 1rem;
  border-radius: .2rem;
  border: 1px solid gray;
  #body > div:nth-child(even) {
    background-color: gray;
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
  * {
    flex: 1;
  }
`

const Table = ({ColumnHeaders, RowData, Sortable}: TableProps) => {
  const [ filter, setFilter ] = React.useState<string>("");
  const [ statusFilter, setStatusFilter ] = React.useState<Object[]>([]);
  
  return (
    <DivLikeTable>
      <DivLikeThead>
      {
        ColumnHeaders.map(column => {
          return (
            <div>
              {column}
              {
                Sortable ? (
                  <IconButton size="small" onClick={(e) => setFilter(column.toLowerCase())}>
                    <ArrowDownward></ArrowDownward>
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
        filter == "" ?
        RowData.map(item => (
          <DivLikeRow>
          {
            Object.entries(item).map((i) => {
              return (
                <div>
                  {i[1]}
                </div>
              )
            })
          }
          </DivLikeRow>
        )) :
        RowData.sort((i1, i2) => {
          // @ts-ignore: Unreachable code error
          if (i1[filter] < i2[filter]) {
            return -1
          } 
          // @ts-ignore: Unreachable code error
          if (i1[filter] > i2[filter]) {
            return 1
          }

          return 0
        }).map(item => (
          <DivLikeRow>
          {
            Object.entries(item).map((i) => {
              return (
                <div>
                  {i[1]}
                </div>
              )
            })
          }
          </DivLikeRow>
        ))
      }
      </DivLikeTbody>
      <div>
        <h1>MEU FOOTER</h1>
      </div>
    </DivLikeTable>
  )
}

export default Table
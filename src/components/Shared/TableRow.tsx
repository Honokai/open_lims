import { Checkbox } from "@mui/material"
import React from "react"
import { DivContentTable, DivLikeRow } from "../../Helpers/StyledTags"
import { dataPropsGeneric } from "../../Helpers/TypeHelpers"

interface RowProps {
  showCheckbox?: boolean
  index: number
  item: dataPropsGeneric
  checked?: boolean
  handleCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TableRow = ({showCheckbox, index, item, handleCheckBox, checked}: RowProps) => {
  return (
    <DivLikeRow>
      {
        showCheckbox ? (
          <DivContentTable>
            <Checkbox
              disableRipple
              key={`checkbox[${index}]`}
              id={`checkbox[${item['id']}]`}
              value={item['id']}
              checked={checked ?? false}
              onChange={(e) => handleCheckBox(e)}
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
  )
}
import { Checkbox, Skeleton } from "@mui/material"
import { DivContentTable, DivLikeRow, DivLikeTbody } from "../../Helpers/StyledTags"

interface BodyProps {
  data: Object[],
  search: {[key: string]: any}
}


export const TableBody = ({data, search}: BodyProps) => {
  return (
    <DivLikeTbody id="tableBody" /*ref={tableBody}*/>
      {
        data.length > 0 ?
          data.map((item, index) => (
            <DivLikeRow key={`row[${index}]`}>
              {
                false ? (
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
          Object.values(search).filter(x => x !== '').length > 0 ?
            <DivContentTable>
              No results to filter
            </DivContentTable> :
            <Skeleton variant="rectangular" sx={{ fontSize: '3rem' }} />
      }
      </DivLikeTbody>
  )
}
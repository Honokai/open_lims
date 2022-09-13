import { DivLikeThead, DivContentTable } from "../../Helpers/StyledTags"
import { TableFiltersProps } from "../../Helpers/TypeHelpers"
import { InputFilter } from "./InputsFilter"

export const TableFilters = ({searchable, entity, showCheckbox, parentInputSearchHandler, parentStateValues}: TableFiltersProps) => {
  return (
    <DivLikeThead>
      {
        showCheckbox ? (
          <DivContentTable>
          
          </DivContentTable>
        ): ""
      }
      {
        searchable ?
        entity.getDataFields().map((columnName) => {
          return (
            <InputFilter 
              selectValue={parentStateValues.condition[columnName.field] ?? ""} 
              inputValue={parentStateValues.search[columnName.field] ?? ""} 
              parentChangeHandler={(e) => {
                if(parentInputSearchHandler)
                  parentInputSearchHandler(e)
                }
              } 
              key={`inputFilter[${columnName.field}]`}
              columnName={columnName}
            />
          )
        }) : ""
      }
    </DivLikeThead>
  )
}
import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

interface InputProps {
  columnName: string
  selectValue: string
  inputValue: string
  parentChangeHandler: ([]: string[]) => void
}

export const InputFilter = ({ columnName, parentChangeHandler, selectValue, inputValue }: InputProps) => {
  const [timer, setTimer] = React.useState(0)
  const [searchInput, setSearchInput] = React.useState({field: inputValue, condition: selectValue ? selectValue : "contains"})

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    clearTimeout(timer)

    setSearchInput({...searchInput, field: e.target.value})

    callForUpdate([e.target.name, e.target.value, searchInput.condition ])
  }

  function handleConditionChange(e: SelectChangeEvent)
  {
    setSearchInput({...searchInput, condition: e.target.value})
  }

  function callForUpdate(e: string[])
  {
    let t = setTimeout(() => {
      parentChangeHandler(e)
    }, 1000, e)

    setTimer(t)
  }

  return(
    <div>
      <FormControl sx={{ display: "flex", flex: 1, margin: "0 .4rem" }} size="small">
        <Select
          id={`condition[${columnName}]`}
          name={`${columnName}`}
          value={searchInput.condition}
          onChange={handleConditionChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={"contains"}>Contains</MenuItem>
          <MenuItem value={"equals"}>Equals</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name={`${columnName}`}
        sx={{margin: "0 .4rem"}}
        size="small" placeholder={`${columnName.toUpperCase()}`}
        value={searchInput.field}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}
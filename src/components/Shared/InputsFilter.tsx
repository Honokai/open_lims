import React from "react";
import { TextField } from "@mui/material";
import { useTable } from "../../contexts/useTable";

interface InputProps {
  columnName: string
}

export const InputFilter = ({ columnName }: InputProps) => {
  const {statusFilter, handleInputSearch} = useTable()
  const [searchInput, setSearchInput] = React.useState(statusFilter.search[columnName] ?? "")
  const [timer, setTimer] = React.useState(0)

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    clearTimeout(timer)

    setSearchInput(e.target.value)

    let t = setTimeout(() => {
      e.target.value === '' ? handleInputSearch(e, true) : handleInputSearch(e)
    }, 500, e)

    setTimer(t)
  }

  return(
    <div>
      <TextField
        name={`${columnName}`}
        sx={{margin: "0 .4rem"}}
        size="small" placeholder={`${columnName.toUpperCase()}`}
        value={searchInput}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}
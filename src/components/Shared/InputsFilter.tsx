import React from "react";
import { TextField } from "@mui/material";
import { useTable } from "../../contexts/useTable";

interface InputProps {
  columnName: string
  value: string|null
}

export const InputFilter = ({ columnName, value }: InputProps) => {
  const {statusFilter, handleInputSearch} = useTable()
  const [searchInput, setSearchInput] = React.useState(statusFilter.search[columnName] ?? "")
  const [timer, setTimer] = React.useState(0)

  // React.useEffect(() => {
  //   console.log(statusFilter)
  // }, [statusFilter])

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    clearTimeout(timer)

    setSearchInput(e.currentTarget.value)

    let t = setTimeout(() => {
      handleInputSearch(e)
    }, 1000, e)

    setTimer(t)
  }

  return(
    <div>
      <TextField
        name={`${columnName}`}
        sx={{margin: "0 .4rem"}}
        size="small" placeholder={`${columnName.toUpperCase()}`}
        // @ts-ignore: Unreachable code error
        value={searchInput}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}
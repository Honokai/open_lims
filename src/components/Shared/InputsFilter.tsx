import React from "react";
import { TextField } from "@mui/material";
import { useTable } from "../../contexts/useTable";

interface InputProps {
  columnName: string
}

export const InputFilter = ({ columnName}: InputProps) => {
  const {statusFilter, handleInputSearch} = useTable()
  const [searchInput, setSearchInput] = React.useState("")

  // React.useEffect(() => {
  //   console.log(statusFilter)
  // }, [statusFilter])

  return(
    <div>
      <TextField
        name={`${columnName}`}
        sx={{margin: "0 .4rem"}} 
        size="small" placeholder={`${columnName.toUpperCase()}`}
        // @ts-ignore: Unreachable code error
        value={statusFilter.search[columnName] ?? ""}
        onChange={(e) => handleInputSearch(e)}
      />
    </div>
  )
}
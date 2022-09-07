import React from "react";
import { TextField } from "@mui/material";

interface InputProps {
  columnName: string
}

export const InputFilter = ({ columnName }: InputProps) => {
  const [searchInput, setSearchInput] = React.useState("")

  function handleInputSearch(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    setSearchInput(event.currentTarget.value)
    // search(event)
  }

  return(
    <div key={columnName}>
      <TextField
        name={`${columnName}`}
        sx={{margin: "0 .4rem"}} 
        size="small" placeholder={`${columnName.toUpperCase()}`}

        // value={handleInputSearch}
        defaultValue={searchInput}
        onChange={(e) => handleInputSearch(e)}
      />
    </div>
  )
}
import React from "react";
import { TextField } from "@mui/material";

interface InputProps {
  columnName: string
  value: string
  parentChangeHandler: (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
}

export const InputFilter2 = ({ columnName, parentChangeHandler, value }: InputProps) => {
  const [searchInput, setSearchInput] = React.useState(value)
  const [timer, setTimer] = React.useState(0)

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    clearTimeout(timer)

    setSearchInput(e.target.value)

    let t = setTimeout(() => {
      parentChangeHandler(e)
    }, 1000, e)

    setTimer(t)
  }

  return(
    <div>
      <TextField
        name={`${columnName}`}
        sx={{margin: "0 .4rem"}}
        size="small" placeholder={`${columnName.toUpperCase()}`}
        value={searchInput ?? value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}
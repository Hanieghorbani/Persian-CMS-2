import React from "react"
import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import "./SearchBox.css"
export default function SearchBox() {
  return (
    <TextField
      className="inputBox rounded"
      id="input-with-icon-textfield"
      placeholder="جستجو کنید..."
      color="string"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className="text-secondary ms-2 mb-3" />
          </InputAdornment>
        ),
      }}
      variant="filled"
    />
  )
}

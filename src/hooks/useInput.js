import React from "react"
import { useState } from "react"

export default function useInput(init) {
  const [value, setValue] = useState(init)

  const binding = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value)
    },
  }
  function resetInputs() {
    setValue("")
  }

  return [value, binding, resetInputs,setValue]
}

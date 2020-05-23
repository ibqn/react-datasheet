import React, { useState } from "react"

import DataSheet from "react-datasheet"
import "react-datasheet/lib/react-datasheet.css"
import "./app.css"

const App = () => {
  const [state, setState] = useState({
    grid: [
      [
        { readOnly: true, value: "/" },
        { value: "A", readOnly: true },
        { value: "B", readOnly: true },
        { value: "C", readOnly: true },
        { value: "D", readOnly: true },
      ],
      [
        { readOnly: true, value: 1 },
        { value: 1 },
        { value: 3 },
        { value: 3 },
        { value: 3 },
      ],
      [
        { readOnly: true, value: 2 },
        { value: 2 },
        { value: 4 },
        { value: 4 },
        { value: 4 },
      ],
      [
        { readOnly: true, value: 3 },
        { value: 1 },
        { value: 3 },
        { value: 3 },
        { value: 3 },
      ],
      [
        { readOnly: true, value: 4 },
        { value: 2 },
        { value: 4 },
        { value: 4 },
        { value: 4 },
      ],
    ],
  })

  return (
    <DataSheet
      data={state.grid}
      valueRenderer={(cell) => cell.value}
      onContextMenu={(e, cell, i, j) =>
        cell.readOnly ? e.preventDefault() : null
      }
      onCellsChanged={(changes) => {
        // create a deep copy of grid array
        const grid = state.grid.map((row) => [...row])

        changes.forEach((change) => {
          const { /*cell,*/ row, col, value } = change
          grid[row][col] = { ...grid[row][col], value }
        })
        setState({ grid })
      }}
    />
  )
}

export default App

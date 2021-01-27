import React from "react"
import * as Cell from "../Cell/Cell"

export function BoardView({board, onClickAt}: any) {
  return (
    <div className="board">
      {
        board.map((cell: any, i: any) => {
          return (
            <Cell.View
              key={i}
              cell={cell}
              onClick={(_: any) => onClickAt(i)}
            />
          )
        })
      }
    </div>
  )
}

export function ScreenView({className, children}: any) {
  return (
    <div className={`screen ${className}`}>
      {children}
    </div>
  )
}

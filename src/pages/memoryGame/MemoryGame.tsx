import React, { FC } from 'react'
import * as Cell from '../../components/Cell/Cell'

export const MemoryGame: FC = () => {
  
  let cellOpen = {symbol: "A", status: Cell.Status.Open}
  let cellClosed = {symbol: "B", status: Cell.Status.Closed}
  let cellFailed = {symbol: "C", status: Cell.Status.Failed}
  let cellDone =  {symbol: "D", status: Cell.Status.Done}

  return (
    <>
      <Cell.View cell={cellOpen}/>
      <Cell.View cell={cellClosed}/>
      <Cell.View cell={cellFailed}/>
      <Cell.View cell={cellDone}/>
    </>
  )
}

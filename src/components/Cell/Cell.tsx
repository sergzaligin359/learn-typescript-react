import React, { FC } from 'react'

export let Status: any = {
  Open: "Open",
  Closed: "Closed",
  Done: "Done",
  Failed: "Failed"
}

export const isOpen = (cell: any) => cell.status == Status.Open
export const isClosed = (cell: any) => cell.status == Status.Open
export const isDone = (cell: any) => cell.status == Status.Open
export const isFailed = (cell: any) => cell.status == Status.Open

export function View({cell, onClick}: any){
  let {status, symbol} = cell
  return (
    <div className={`cell ${classByStatus(status)}`} onClick={onClick}>
      {status == Status.Closed ? "" : symbol}
    </div>
  )
}

export function classByStatus(status: any) {
  return status.toLowerCase()
}

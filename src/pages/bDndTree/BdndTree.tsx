import React, { FC, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid';

const itemsFromBackend = [
  { id: uuidv4(), content: 'First tasks' },
  { id: uuidv4(), content: 'Second tasks' },
]
const itemsFromBackend2 = [
  { id: uuidv4(), content: 'Three tasks' },
  { id: uuidv4(), content: 'Four tasks' },
]
const columnsFromBackend = {
    [uuidv4()]: {
      name: 'Todo',
      items: itemsFromBackend
    },
    [uuidv4()]: {
      name: 'In progress',
      items: itemsFromBackend2
    }
  }

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if(!result.destination) return

  const { source, destination } = result

  if(source.droppableId !== destination.droppableId){
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  }else{
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }

}

const BdndTree: FC = () => {
  const [columns, setColumns] = useState(columnsFromBackend)

  return (
    <div style={{display: 'flex'}}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {
          Object.entries(columns).map(([id, column]) => {
            return (
              <div
                className="column"
                style={{display: 'flex', flexDirection: 'column', margin:'10px'}}
                key={id}
              >
                <h2>{column.name}</h2>
                <Droppable droppableId={id} >
                  {
                    (provided, snapshot) => {
                      return(
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                            padding: 4,
                            width: 250,
                            minHeight: 500
                          }}
                        >
                        {
                          column?.items.map((item: any, index: any) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                              {
                                (provided, snapshot) => {
                                  return(
                                    <div
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}

                                    >
                                      {item.content}
                                    </div>
                                  )
                                }
                              }
                              </Draggable>
                            )
                          })
                        }
                        </div>
                      )
                    }
                  }
                </Droppable>
              </div>
            )
          })
        }
      </DragDropContext>
    </div>
  )
}
// style={{ background: snapshot.isDragging ? 'blue' : 'yellow', }}
export default BdndTree

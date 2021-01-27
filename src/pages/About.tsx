import { Button } from 'antd'
import React, { useState } from 'react'

interface IItem{
  id?: number,
  name?: string,
  date?: string
}

export const About: React.FC = () => {

    const [items, setItems] = useState<IItem[]>([{
      id: 1,
      name: 'Sergey',
      date: '16-02-2021'
    }])
    const addHandle = () => {
      const newItem = {
        id: undefined,
        name: 'Ivan',
        date: undefined
      };
      setItems((prev): IItem[] => {
        return [
          ...prev,
          newItem
        ]
      })
    }
    const a = {
      b: 12
    }
    console.log('a.b', a.b)

    return (
        <div>
            <h1>Страница о нас</h1>
            <ul>
              {
                items.map((item) => <li key={Math.random()}>{item.name}</li>)
              }
            </ul>
            <Button onClick={addHandle}>Add new item</Button>
        </div>
    )
}

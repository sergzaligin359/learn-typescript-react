
import { Space, Table, Tag } from 'antd';
import React, { FC, ReactNode, useState } from 'react'


// dataIndex	Display field of the data record, support nest path by string array	string | string[]
// key	Unique key of this selection	string
const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Тэги',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag: string) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: null,
    key: 'action',
    render: (record: IUsers) => {
      // console.log('record', record);
      return (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
      )
    }
  },
];

// interface ITags{
//   tags: string[] | undefined
// }

interface IUsers{
  id: string
  name: string
  age: number
  address: string
  tags: string[]
}

export const TableFieldEditable: FC = () => {

    const data: IUsers[] = [
      {
        id: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        id: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        id: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

    const [users, setUsers] = useState<IUsers[]>(data)

    console.log('USERS data: ', users)

    return (
        <>
            <Table dataSource={data} columns={columns} rowKey="id" />
        </>
    )
}

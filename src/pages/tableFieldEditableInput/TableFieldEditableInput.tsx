
import React, { useContext, useState, useEffect, useRef, FC } from 'react';
import { Table, Input, Button, Popconfirm, Form, Space, Tag } from 'antd';
import { FormInstance } from 'antd/lib/form';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof IUsers;
  record: IUsers;
  handleSave: (record: IUsers) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface EditableTableState {
  dataSource: IUsers[];
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


// dataIndex	Display field of the data record, support nest path by string array	string | string[]
// key	Unique key of this selection	string
// const columns = [
//   {
//     title: 'Имя',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Возраст',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Адрес',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Тэги',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (tags: string[]) => (
//       <>
//         {tags.map((tag: string) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: null,
//     key: 'action',
//     render: (record: IUsers) => {
//       // console.log('record', record);
//       return (
//           <Space size="middle">
//             <a>Invite {record.name}</a>
//             <a>Delete</a>
//           </Space>
//       )
//     }
//   },
// ];

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

export const TableFieldEditableInput: FC = <EditableTableProps, EditableTableState>() => {

    const columns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
      {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        editable: true,
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
      }
    ];

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

    const handleSave = (row: IUsers) => {
      const newData = [...users];
      const index = newData.findIndex(item => row.id === item.id);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setUsers(newData);
    };

    const handleDelete = (key: React.Key) => {
      const dataSource = [...users];
      setUsers(users.filter(item => item.id !== key));
    };

    const handleAdd = () => {

      const newData: IUsers = {
        id: Date.now().toString(),
        name: `Edward King`,
        age: 32,
        address: `London, Park Lane no.`,
        tags: ['newTag']
      };
      setUsers([...users, newData]);
    };

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns2 = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: IUsers) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: handleSave,
        }),
      };
    });

    return (
        <>
            <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
              Add a row
            </Button>
            <Table
              dataSource={users}
              columns={columns2 as ColumnTypes}
              rowKey="id"
              components={components}
              rowClassName={() => 'editable-row'}
            />
        </>
    )
}

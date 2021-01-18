
import React, { useContext, useState, useEffect, useRef, FC } from 'react';
import { Table, Input, Button, Popconfirm, Form, Space, Tag, DatePicker } from 'antd';
import { FormInstance } from 'antd/lib/form';
import moment from 'moment';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}
const worker = {
  date: moment('2020-06-09T12:40:14+0000')
};
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false} initialValues={worker}>
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
  const [type, setType] = useState('input');
  const [date, setDate] = useState<any>(moment());
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<any>(null);

  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);
  const onChangeDate = (e: any) => {
    //console.log('DATE event change', e.format('YYYY/MM/DD'));
    setDate(e.format('YYYY/MM/DD'))
  }
  const toggleEdit = () => {
    // console.log('form get value', form.getFieldsValue())
    if(dataIndex == 'date'){
      setType('date');
      // console.log('dataIndex', dataIndex)
      //console.log('record[dataIndex] date', record)
      // form.setFieldsValue({ date: "2000-01-15T13:24:46.389" });
      form.setFieldsValue({ [dataIndex]: date });
    }else{
      setType('input');
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    }
    setEditing(!editing);
    //console.log('TYPE INPUT: dataIndex', type, dataIndex);
  };

  const save = async () => {
    try {
      // const values = await form.validateFields();
      // console.log('VALUES in save', values)
      // toggleEdit();
      // handleSave({ ...record, ...values });

      // Work solution
      if(dataIndex == 'date'){
        toggleEdit();
        handleSave({ ...record, date });
      }else{
        const values = await form.validateFields();
        //console.log('VALUES in save', values)
        toggleEdit();
        handleSave({ ...record, ...values });
      }
      // end

    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    if(type !== 'date'){
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
    }else{
      const dateFormat = "YYYY/MM/DD";
      childNode = editing ? (
           <DatePicker ref={inputRef}  onBlur={save} name="date" onChange={ (e) => onChangeDate(e) } />
      ) : (
        <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
          {children}
        </div>
      );
    }

  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface EditableTableState {
  dataSource: IUsers[];
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


interface IUsers{
  id: string
  name: string
  age: number
  date: string | null
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
        editable: true,
      },
      {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        editable: true,
        render: (date: any): any =>{
          return date ? moment(date).format('YYYY/MM/DD') : ' '
        }
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
        dataIndex: 'id',
        render: (record: string) => {
          // console.log('Record', record)
          return (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
              <a>Delete</a>
            </Popconfirm>
          )
        }
      }

    ];

    const data: IUsers[] = [
      {
        id: '1',
        name: 'John Brown',
        age: 32,
        date: "2021-01-09T15:30:11.426",
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        id: '2',
        name: 'Jim Green',
        age: 42,
        date: "2021-01-09T15:30:11.426",
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        id: '3',
        name: 'Joe Black',
        age: 32,
        date: null,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

    const [users, setUsers] = useState<IUsers[]>(data)

    // console.log('USERS data: ', users)

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

    const handleDelete = (id: string) => {
      console.log('DELETE user id', id)
      const dataSource = [...users];
      setUsers(users.filter(item => item.id != id));

    };
    console.log('Before update users', users)
    const handleAdd = () => {

      const newData: IUsers = {
        id: Date.now().toString(),
        name: `Edward King`,
        age: 32,
        date: null,
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


const stagesForCard: any = [
    {
        name: "Приглашение",
        status: null,
        date: null,
        id: 1
    },
    {
        name: "Первичное собеседование",
        status: null,
        date: null,
        id: 2
    },
    {
        name: "Собеседование с руководителем",
        status: null,
        date: null,
        id: 3
    },
    {
        name: "wwwwww",
        status: null,
        date: null,
        id: 6
    },
    {
        name: "dddd222",
        status: null,
        date: "2021-01-09T15:30:11.426",
        id: 7
    },
    {
        name: "HR интервью",
        status: null,
        date: "2021-01-15T13:24:46.389",
        id: 5
    }
]

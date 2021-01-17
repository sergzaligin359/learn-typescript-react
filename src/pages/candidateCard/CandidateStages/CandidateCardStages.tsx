import { DatePicker, Space } from "antd";
import React, { useState } from "react";
import moment from 'moment';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined, PlusCircleOutlined } from '@ant-design/icons';
import shortid from 'shortid';

interface CandidateCardFormProps {
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

const fieldsTest = [
  {first: "Sergey", last: "Zaligin"},
  {first: "Ivan", last: "Zaligin"},
  {first: "Viktor", last: "Zaligin"},
  {first: "Ludmila", last: "Zaligina"},
];

export const CandidateCardStages: React.FC<any> = () => {

    console.log('shortid', shortid.generate());

    const [stages, setStages] = useState<any>([
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
    );

    const [form]: any = Form.useForm<any>()

    const onFinish = (values: any) => {
      console.log('Received values of form:', values);
    };

    const remove = (id: any) => {
      console.log('remove el', id);
      const newArr = stages.filter((stage: any) => stage.id != id);
      setStages(newArr);
    }

    const change = (e: any, id: any) => {
      console.log('change el', id);
      const updateStage = stages.map((stage: any) => stage.id == id ? Object.assign(stage, {
        [e.target.name]: e.target.value
      }) : stage)
      setStages(updateStage)
    }

    const changeDate = (e: any, id: any) => {
      console.log('change e date', e);
      const updateStage = stages.map((stage: any) => stage.id == id ? Object.assign(stage, {
        date: e
      }) : stage)
      setStages(updateStage)
    }

    const add = () => {
      const newStage = {
        name: "",
        status: null,
        date: null,
        id: shortid.generate()
      }
      setStages([...stages, newStage])
    }

    console.log('add show stages', stages)

    return (
      <>
        <Form name="dynamic_form_nest_item" onFinish={onFinish} form={form} autoComplete="off" >
          {
            stages.map((stage: any, index: any): any => {
              // console.log('stage map', stage)
              return(
                <Space key={stage.id} style={{ display: 'flex', marginBottom: 8 }} align="baseline">

                      <Form.Item>
                        <Input
                          defaultValue={stage.name}
                          name="name"
                          onChange={(e) => change(e, stage.id)}
                        />
                      </Form.Item>

                      <Form.Item>
                        {stage.date ? <DatePicker
                          onChange={(e) => changeDate(e, stage.id)}
                          defaultValue={moment(stage.date?.toString()!)}
                          name="date"
                          /> : <DatePicker
                          onChange={(e) => changeDate(e, stage.id)}
                          name="date"
                          />}
                      </Form.Item>

                      <Form.Item>
                        <Input
                          onChange={(e) => change(e, stage.id)}
                          defaultValue={stage.status as unknown as undefined}
                          name="status"
                        />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(stage.id)} />
                </Space>
              )
            })
          }

          <Button
              onClick={add}
              type="primary"
              style={{ marginTop: 16 }}>
              <PlusCircleOutlined />
              Добавить этап
          </Button>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
};

// const worker = {
//     dateOfBirth: moment(candidateCard?.dateOfBirth.toString()!),
// }


// const [form] = Form.useForm<CandidateCardDto>()
// form={form}




// <Space key={'122'} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
//       <Form.Item
//         initialValue={'jjkkjk'}
//         name='name'
//         rules={[{ required: true, message: 'Missing first name' }]}
//       >
//         <Input placeholder="Name" />
//       </Form.Item>
//       <Form.Item
//         name='date'
//         rules={[{ required: true, message: 'Missing first name' }]}
//       >
//         <DatePicker />
//       </Form.Item>
//       <Form.Item
//         name='status'
//         rules={[{ required: true, message: 'Missing first name' }]}
//       >
//         <Input placeholder="Status" />
//       </Form.Item>
//       <MinusCircleOutlined onClick={() => remove()} />
// </Space>



// {(fields, { add, remove }: any) => {
//   console.log('fields', fields);
//   return (
//
//     <>
//       {stagesForCard.map((field: any) => (
//         <Space key={field.id} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
//           <Form.Item
//             initialValue={field.name}
//             name='name'
//             rules={[{ required: true, message: 'Missing first name' }]}
//           >
//             <Input placeholder="Name" />
//           </Form.Item>
//           <Form.Item
//             name='date'
//             rules={[{ required: true, message: 'Missing last name' }]}
//           >
//             <DatePicker />
//           </Form.Item>
//           <Form.Item
//             initialValue={field.status}
//             name='status'
//             rules={[{ required: true, message: 'Missing first name' }]}
//           >
//             <Input placeholder="Status" />
//           </Form.Item>
//           <MinusCircleOutlined onClick={() => remove(field.id)} />
//         </Space>
//       ))}
//       <Form.Item>
//         <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
//           Add field
//         </Button>
//       </Form.Item>
//     </>
//   )}
// }



// export const CandidateCardStages: React.FC = () => {
//   const [stages, ] = useState<any>(stagesForCard);
//   const onChangeRow = (row: any) => {
//     console.log('row', row);
//   }
//   const onChangeCell = (cell: any, row: any, e: any) => {
//     console.log('target value', e);
//     console.log('cell', cell);
//     console.log('row', row);
//   }
//   return (
//       <div>
//
//         <table>
//           <thead>
//             <tr>
//               <th>Этап</th>
//               <th>Дата</th>
//               <th>Статус</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               stages.map((item: any) => {
//                 return (
//                   <tr key={item.id}>
//                     <td>
//                       <Form.Item>
//                         <Input defaultValue={item.name}  onChange={(e) => onChangeCell(item.name, item, e)} />
//                       </Form.Item>
//                     </td>
//                     <td>
//                         <DatePicker onChange={(e) => onChangeCell(item.date, item, e)} />
//                     </td>
//                     <td>
//                       <Form.Item>
//                         <Input defaultValue={item.status}  onChange={(e) => onChangeCell(item.status, item, e)}/>
//                       </Form.Item>
//                     </td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>
//       </div>
//
//   )
// }

// <Input defaultValue={item.date}  onChange={(e) => onChangeCell(item.date, item, e)}/>

// <td>{item.name}</td>
// <td>{item.date}</td>
// <td>{item.status}</td>

// <Form.Item name="username" label="Username">
//   <Input />
// </Form.Item>

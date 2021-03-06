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

    const save = (e: any) => {
      console.log('ON BLUR NAME SAVE')
      if(!e.target.value){
        console.error('Name is required!')
      }else{
        console.log('Data name save success', e.target.value)
      }
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
                          onBlur={(e) => save(e)}
                        />
                      </Form.Item>

                      <Form.Item>
                        {stage.date ? <DatePicker
                          onChange={(e) => changeDate(e, stage.id)}
                          onBlur={() => console.log('ON BLUR Date')}
                          defaultValue={moment(stage.date?.toString()!)}
                          name="date"
                          /> : <DatePicker
                          onChange={(e) => changeDate(e, stage.id)}
                          onBlur={() => console.log('ON BLUR Date')}
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

import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import React, { useState } from "react";
import { CandidateCardProps } from "./CandidateCardForm.model";

interface CandidateCardFormProps {
  username: CandidateCardProps
}

export const CandidateCardForm: React.FC<CandidateCardFormProps> = ({ username }) => {
  const [form] = Form.useForm<CandidateCardProps>();

  const [candidate, setCandidate]: any = useState({
    position: {name: "Позиция 1", id: 2}
  })

  const [vaca, setVaca]: any = useState(
    {
        name: "начальник отдела",
        fullName: "начальник отдела",
        isStatePosition: true,
        id: 2
    }
  )

  const onSubmit = (): void => {
    console.log(form.getFieldsValue());
  };

  return (
      <div>
        <Form
            form={form}
            name="candidateRequestForm"
            id="candidateRequestForm"
            layout={'vertical'}
            onFinish={onSubmit}
        >
          <Form.Item name="position" initialValue={vaca?.name} label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="positionId" initialValue={vaca?.id} noStyle>
            <Input  type="hidden"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

  )
}

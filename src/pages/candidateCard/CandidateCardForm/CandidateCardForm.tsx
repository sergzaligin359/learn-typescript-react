import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import React from "react";
import { CandidateCardProps } from "./CandidateCardForm.model";

interface CandidateCardFormProps {
  username: CandidateCardProps
}

export const CandidateCardForm: React.FC<CandidateCardFormProps> = ({ username }) => {
  const [form] = Form.useForm<CandidateCardProps>();
  
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
            initialValues={username}
        >
          <Form.Item name="username" label="Username">
            <Input />
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

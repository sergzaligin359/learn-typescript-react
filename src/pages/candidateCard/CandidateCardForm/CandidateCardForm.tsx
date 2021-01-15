import Form from "antd/lib/form";
import { CandidateCardProps } from "./CandidateCardForm.model";


export const CandidateCardForm: React.FC = () => {
const [form] = Form.useForm<CandidateCardProps>();
  return (

      <div>
      <Form
            form={form}
            name="candidateRequestForm"
            id="candidateRequestForm"
            layout={'vertical'}
            className="modal-form"
        >
        </Form>
      </div>

  )
}

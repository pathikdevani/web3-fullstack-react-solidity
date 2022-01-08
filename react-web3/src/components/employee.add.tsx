import React from 'react';
import { 
  Modal,
  Form,
  Input,
  InputNumber,
} from 'antd';

function EmployeeAdd(props:any) {
  const {isVisible, onSubmit, onCancel} = props;
  const [form] = Form.useForm();


  return (
    <Modal 
      title="Add employee" 
      visible={isVisible} 
      onOk={async () => {
        form.submit();
        const touched = form.isFieldsTouched(true);
        const error = !!form.getFieldsError().filter(({ errors }) => errors.length).length;
        if(!touched || error) {
          return false;
        }

        if(onSubmit){
          onSubmit(form.getFieldsValue());
        }
      }}
      onCancel={onCancel}
    >
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
          label="Name"
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input your age',
            },
          ]}
          label="Age"
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item 
          name="city"
          rules={[
            {
              required: true,
              message: 'Please input your city',
            },
          ]}
          label="City"
        >
          <Input /> 
        </Form.Item>
        <Form.Item 
          name="note"
          rules={[
            {
              required: true,
              message: 'Please input your note',
            },
          ]}
          label="Note"
        >
          <Input />
        </Form.Item>
      </Form> 
    </Modal>
  );
}

export default EmployeeAdd;

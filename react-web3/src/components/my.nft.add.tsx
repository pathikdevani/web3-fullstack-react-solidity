import React from 'react';
import { 
  Modal,
  Form,
  Input,
} from 'antd';

function MyNFTAdd(props:any) {
  const {isVisible, onSubmit, onCancel} = props;
  const [form] = Form.useForm();

  return (
    <Modal 
      title="Add NFT" 
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
          name="color"
          rules={[
            {
              required: true,
              message: 'Please input your color code',
            },
          ]}
          label="Color"
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your color name',
            },
          ]}
          label="Name"
        >
          <Input /> 
        </Form.Item>
        <Form.Item 
          name="symbol"
          rules={[
            {
              required: true,
              message: 'Please input your color symbol',
            },
          ]}
          label="Symbol"
        >
          <Input /> 
        </Form.Item>
      </Form> 
    </Modal>
  );
}

export default MyNFTAdd;

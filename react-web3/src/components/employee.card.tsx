import React from 'react';
import { Card, Avatar } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined
  } from "@ant-design/icons";

const { Meta } = Card;

function EmployeeCard(props: any) {
  const {name, description} = props;
  return (
    <Card
      style={{ 
        width: 300,
        marginTop: 10,
        marginLeft: 10,
        float: 'left',
      }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={name}
      description={description}
    />
  </Card>
  );
}

export default EmployeeCard;

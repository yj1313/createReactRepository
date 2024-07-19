import React from "react";
import { Table, Button, Space } from "antd";

const UserList = ({ users, onDelete, onEdit }) => {
  const columns = [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "年龄", dataIndex: "age", key: "age" },
    { title: "邮箱", dataIndex: "email", key: "email" },
    { title: "地址", dataIndex: "address", key: "address" },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => onEdit(record)}>
            编辑
          </Button>
          <Button danger onClick={() => onDelete(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} rowKey="id" />;
};

export default UserList;

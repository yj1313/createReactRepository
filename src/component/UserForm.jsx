// src/UserForm.js

import React, { useEffect } from "react";
import { Modal, Form, Input, InputNumber } from "antd";

const UserForm = ({ visible, onCreate, onUpdate, onCancel, user }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.resetFields();
    }
  }, [visible, user, form]);

  const onFinish = (values) => {
    if (user) {
      onUpdate({ ...user, ...values });
    } else {
      onCreate(values);
    }
  };

  return (
    <Modal
      open={visible}
      title={user ? "编辑用户" : "添加用户"}
      okText={user ? "更新" : "添加"}
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onFinish(values);
        });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="年龄"
          rules={[{ required: true, message: "请输入年龄" }]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入有效的邮箱地址" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="address" label="地址">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;

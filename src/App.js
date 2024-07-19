import React, { useState } from "react";
import { Layout, Button } from "antd";
import UserList from "./component/UserList";
import UserForm from "./component/UserForm";

const { Content } = Layout;

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "刘一", age: 21, email: "liuyi@163.com", address: "广州市" },
    {
      id: 2,
      name: "陈二",
      age: 23,
      email: "chener@163.com",
      address: "上海市",
    },
    {
      id: 3,
      name: "张三",
      age: 25,
      email: "zhangsan@163.com",
      address: "北京市",
    },
    { id: 4, name: "李四", age: 22, email: "lisi@163.com", address: "深圳市" },
    {
      id: 5,
      name: "王五",
      age: 24,
      email: "wangwu@163.com",
      address: "成都市",
    },
    {
      id: 6,
      name: "赵六",
      age: 26,
      email: "zhaoliu@163.com",
      address: "重庆市",
    },
    { id: 7, name: "孙七", age: 23, email: "sunqi@163.com", address: "天津市" },
    {
      id: 8,
      name: "周八",
      age: 27,
      email: "zhouba@163.com",
      address: "南京市",
    },
    { id: 9, name: "吴九", age: 20, email: "wujiu@163.com", address: "杭州市" },
    {
      id: 10,
      name: "郑十",
      age: 28,
      email: "zhengshi@163.com",
      address: "西安市",
    },
    {
      id: 11,
      name: "黄十一",
      age: 22,
      email: "huangshiyi@163.com",
      address: "武汉市",
    },
    {
      id: 12,
      name: "马十二",
      age: 29,
      email: "mashier@163.com",
      address: "长沙市",
    },
    {
      id: 13,
      name: "朱十三",
      age: 21,
      email: "zhushisan@163.com",
      address: "青岛市",
    },
    {
      id: 14,
      name: "韩十四",
      age: 30,
      email: "hansishi@163.com",
      address: "大连市",
    },
    {
      id: 15,
      name: "曾十五",
      age: 23,
      email: "zengshiwu@163.com",
      address: "厦门市",
    },
    {
      id: 16,
      name: "严十六",
      age: 31,
      email: "yanshiliu@163.com",
      address: "福州市",
    },
    {
      id: 17,
      name: "华十七",
      age: 24,
      email: "huashiqi@163.com",
      address: "南昌市",
    },
    {
      id: 18,
      name: "金十八",
      age: 32,
      email: "jinshiba@163.com",
      address: "郑州市",
    },
    {
      id: 19,
      name: "左十九",
      age: 25,
      email: "zuoshijiu@163.com",
      address: "昆明市",
    },
    {
      id: 20,
      name: "右二十",
      age: 26,
      email: "youshi@163.com",
      address: "拉萨市",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setIsModalVisible(false);
  };

  const editUser = (user) => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
    setIsModalVisible(false);
    setEditingUser(null);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const openAddModal = () => {
    setIsModalVisible(true);
    setEditingUser(null);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "50px" }}>
        <Button
          type="primary"
          onClick={openAddModal}
          style={{ marginBottom: "20px" }}
        >
          添加用户
        </Button>
        <UserList users={users} onDelete={deleteUser} onEdit={openEditModal} />
        <UserForm
          visible={isModalVisible}
          onCreate={addUser}
          onUpdate={editUser}
          onCancel={() => setIsModalVisible(false)}
          user={editingUser}
        />
      </Content>
    </Layout>
  );
};

export default App;

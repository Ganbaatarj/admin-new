"use client";

import Link from "next/link";
import { Layout, Menu, Typography } from "antd";
import {
  FileTextOutlined,
  FolderOpenOutlined,
  TagOutlined,
  HomeOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const menuItems: MenuProps["items"] = [
  {
    key: "dashboard",
    icon: <HomeOutlined />,
    label: <Link href="/">Хяналтын самбар</Link>
  },
  {
    key: "news",
    icon: <FileTextOutlined />,
    label: <Link href="/news">Мэдээ</Link>
  },
  {
    key: "categories",
    icon: <FolderOpenOutlined />,
    label: <Link href="/categories">Ангилал</Link>
  },
  {
    key: "tags",
    icon: <TagOutlined />,
    label: <Link href="/tags">Tag</Link>
  }
];

export default function AdminLayout({
  children,
  activeKey
}: {
  children: React.ReactNode;
  activeKey: string;
}) {
  return (
    <Layout className="app-shell">
      <Sider
        width={260}
        theme="dark"
        style={{ background: "#141414", borderRight: "1px solid #1f1f1f" }}
      >
        <div
          style={{
            padding: "24px 20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}
        >
          <Title level={4} style={{ margin: 0, color: "#fff" }}>
            News Admin
          </Title>
          <Text type="secondary">Dark mode удирдлага</Text>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[activeKey]}
          items={menuItems}
          style={{ background: "#141414" }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#0f0f0f",
            borderBottom: "1px solid #1f1f1f",
            padding: "0 24px"
          }}
        >
          <Title level={5} style={{ color: "#fff", margin: 0 }}>
            Мэдээний сайтны админ
          </Title>
        </Header>
        <Content style={{ padding: "24px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

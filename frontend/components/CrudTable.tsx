"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Typography
} from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

const { Text } = Typography;

export type CrudItem = {
  id: number;
  name: string;
  status: "draft" | "published";
  updatedAt: string;
};

type CrudTableProps = {
  title: string;
  description: string;
  initialItems: CrudItem[];
  nameLabel: string;
};

export default function CrudTable({
  title,
  description,
  initialItems,
  nameLabel
}: CrudTableProps) {
  const [items, setItems] = useState<CrudItem[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CrudItem | null>(null);
  const [form] = Form.useForm();

  const columns: ColumnsType<CrudItem> = useMemo(
    () => [
      {
        title: nameLabel,
        dataIndex: "name",
        key: "name",
        render: (value: string) => <Text strong>{value}</Text>
      },
      {
        title: "Төлөв",
        dataIndex: "status",
        key: "status",
        render: (status: CrudItem["status"]) => (
          <Tag color={status === "published" ? "green" : "gold"}>
            {status === "published" ? "Нийтэлсэн" : "Ноорог"}
          </Tag>
        )
      },
      {
        title: "Шинэчилсэн",
        dataIndex: "updatedAt",
        key: "updatedAt",
        render: (value: string) => dayjs(value).format("YYYY-MM-DD HH:mm")
      },
      {
        title: "Үйлдэл",
        key: "actions",
        render: (_, record) => (
          <Space>
            <Button
              size="small"
              onClick={() => handleEdit(record)}
              type="default"
            >
              Засах
            </Button>
            <Button
              size="small"
              danger
              onClick={() => handleDelete(record.id)}
            >
              Устгах
            </Button>
          </Space>
        )
      }
    ],
    [nameLabel]
  );

  const handleOpenCreate = () => {
    setEditingItem(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (item: CrudItem) => {
    setEditingItem(item);
    form.setFieldsValue({ name: item.name, status: item.status });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();
    const timestamp = new Date().toISOString();

    if (editingItem) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? { ...item, ...values, updatedAt: timestamp }
            : item
        )
      );
    } else {
      const nextId = Math.max(0, ...items.map((item) => item.id)) + 1;
      setItems((prev) => [
        { id: nextId, updatedAt: timestamp, ...values },
        ...prev
      ]);
    }

    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <Card
      title={title}
      extra={
        <Button type="primary" onClick={handleOpenCreate}>
          {title} нэмэх
        </Button>
      }
    >
      <Text type="secondary">{description}</Text>
      <Table
        style={{ marginTop: 16 }}
        rowKey="id"
        columns={columns}
        dataSource={items}
        pagination={{ pageSize: 6 }}
      />
      <Modal
        title={editingItem ? "Засах" : "Шинэ нэмэх"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        okText="Хадгалах"
      >
        <Form layout="vertical" form={form} initialValues={{ status: "draft" }}>
          <Form.Item
            label={nameLabel}
            name="name"
            rules={[{ required: true, message: "Нэр оруулна уу" }]}
          >
            <Input placeholder={`${nameLabel} оруулах`} />
          </Form.Item>
          <Form.Item label="Төлөв" name="status">
            <Select
              options={[
                { value: "draft", label: "Ноорог" },
                { value: "published", label: "Нийтэлсэн" }
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

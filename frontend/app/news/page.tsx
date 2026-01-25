import AdminLayout from "../../components/AdminLayout";
import CrudTable, { CrudItem } from "../../components/CrudTable";

const initialItems: CrudItem[] = [
  {
    id: 1,
    name: "Төсвийн хэлэлцүүлэг эхэллээ",
    status: "published",
    updatedAt: "2024-07-20T09:12:00Z"
  },
  {
    id: 2,
    name: "Шинэ авто зам ашиглалтад орлоо",
    status: "draft",
    updatedAt: "2024-07-19T11:30:00Z"
  },
  {
    id: 3,
    name: "Спортын медаль хүртсэн тамирчин",
    status: "published",
    updatedAt: "2024-07-18T16:45:00Z"
  }
];

export default function NewsPage() {
  return (
    <AdminLayout activeKey="news">
      <CrudTable
        title="Мэдээ"
        description="Мэдээний жагсаалт, төлөв болон засварлах үйлдлүүд."
        initialItems={initialItems}
        nameLabel="Мэдээний гарчиг"
      />
    </AdminLayout>
  );
}

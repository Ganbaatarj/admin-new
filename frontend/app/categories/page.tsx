import AdminLayout from "../../components/AdminLayout";
import CrudTable, { CrudItem } from "../../components/CrudTable";

const initialItems: CrudItem[] = [
  {
    id: 1,
    name: "Улс төр",
    status: "published",
    updatedAt: "2024-07-19T08:40:00Z"
  },
  {
    id: 2,
    name: "Эдийн засаг",
    status: "published",
    updatedAt: "2024-07-18T14:10:00Z"
  },
  {
    id: 3,
    name: "Технологи",
    status: "draft",
    updatedAt: "2024-07-17T10:05:00Z"
  }
];

export default function CategoriesPage() {
  return (
    <AdminLayout activeKey="categories">
      <CrudTable
        title="Ангилал"
        description="Ангиллын нэр, төлөв, шинэчлэлтүүдийг эндээс удирдана."
        initialItems={initialItems}
        nameLabel="Ангиллын нэр"
      />
    </AdminLayout>
  );
}

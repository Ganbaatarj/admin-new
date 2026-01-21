import AdminLayout from "../../components/AdminLayout";
import CrudTable, { CrudItem } from "../../components/CrudTable";

const initialItems: CrudItem[] = [
  {
    id: 1,
    name: "breaking",
    status: "published",
    updatedAt: "2024-07-20T07:20:00Z"
  },
  {
    id: 2,
    name: "interview",
    status: "draft",
    updatedAt: "2024-07-19T18:45:00Z"
  },
  {
    id: 3,
    name: "analysis",
    status: "published",
    updatedAt: "2024-07-18T12:25:00Z"
  }
];

export default function TagsPage() {
  return (
    <AdminLayout activeKey="tags">
      <CrudTable
        title="Tag"
        description="Tag-ийн жагсаалт болон шинэчлэлтийн түүх."
        initialItems={initialItems}
        nameLabel="Tag нэр"
      />
    </AdminLayout>
  );
}

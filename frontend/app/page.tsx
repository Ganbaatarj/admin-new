import { Card, Col, Row, Statistic, Typography } from "antd";
import AdminLayout from "../components/AdminLayout";

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  return (
    <AdminLayout activeKey="dashboard">
      <Title level={3} style={{ color: "#fff" }}>
        Хяналтын самбар
      </Title>
      <Paragraph type="secondary">
        Сүүлийн үзүүлэлтүүд болон контентийн статистик мэдээлэл.
      </Paragraph>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Нийт мэдээ" value={128} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Ноорог мэдээ" value={12} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Идэвхтэй tag" value={36} />
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
}

import "./globals.css";
import { ConfigProvider, theme } from "antd";

export const metadata = {
  title: "News Admin",
  description: "News admin panel with Next.js and Ant Design"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: "#722ed1",
              colorBgBase: "#0f0f0f",
              colorBgContainer: "#141414"
            }
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}

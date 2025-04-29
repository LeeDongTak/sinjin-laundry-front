import AdminLayout from "@/components/admin/AdminLayout";
import SubLayout from "@/components/common/sub-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}

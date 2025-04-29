import AdminDetailMain from "@/components/admin/detail/AdminDetailMain";
import React from "react";

const AdminDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <AdminDetailMain id={id} />;
};

export default AdminDetail;

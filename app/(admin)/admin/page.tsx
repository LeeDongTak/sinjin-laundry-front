import AdminSignin from "@/components/admin/signin/AdminSignin";
import { cookies } from "next/headers";
import React from "react";

const AdminPage = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("connect.sid"); // 세션 쿠키 가져오기

  console.log(session);
  return <AdminSignin />;
};

export default AdminPage;

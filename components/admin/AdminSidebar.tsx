"use client";
import AdminLogo from "@/assets/svg/AdminLogo";
import useAdminSignout from "@/hooks/admin/useAdminSignout";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const AdminSidebar = () => {
  const queryClient = useQueryClient();
  const session = queryClient.getQueryData(["session"]) as { user: string };
  const username = session?.user;
  const { mutate } = useAdminSignout();
  return (
    <>
      <nav className="flex flex-col items-center gap-[16px] fixed top-0 left-0 w-[167px] h-[100dvh] bg-[#284563]">
        <span className="mt-[50px]">
          <AdminLogo />
        </span>
        <p className="text-white text-[16px] font-bold">{username}</p>
        <button
          className="bg-[#D9D9D9] rounded-[2px] w-[70px] h-[22px] flex justify-center items-center text-[14px] font-medium"
          onClick={() => {
            if (window.confirm("로그아웃을 하시겠습니까?")) {
              mutate();
            }
          }}
        >
          로그아웃
        </button>
      </nav>

      <div className="w-[167px] h-[100dvh]" />
    </>
  );
};

export default AdminSidebar;

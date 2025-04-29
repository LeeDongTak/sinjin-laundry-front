"use client";
import useSession from "@/hooks/admin/useSession";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { data } = useSession();
  const { push } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (data) {
      console.log(data.authenticated);
      if (data.authenticated) {
        if (pathname.includes("/admin/contents")) {
          return;
        } else {
          push("/admin/contents");
          return;
        }
      } else {
        push("/admin");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <section className="w-full h-full bg-[#f3f3f3]">{children}</section>;
};

export default AdminLayout;

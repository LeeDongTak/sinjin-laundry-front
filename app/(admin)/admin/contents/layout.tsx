import AdminSidebar from "@/components/admin/AdminSidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex w-full h-full">
      <AdminSidebar />
      <div className="px-[50px] w-full max-w-[1024px] mx-auto">
        <div className="mb-[20px] text-[34px] font-bold text-[#284563] text-center pt-[100px] pb-[114px] w-full border-b border-solid border-[#C6C6C6]">
          <span>고객문의</span>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

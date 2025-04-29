import SubLayout from "@/components/common/sub-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="w-full h-full bg-[#f3f3f3]">{children}</section>;
}

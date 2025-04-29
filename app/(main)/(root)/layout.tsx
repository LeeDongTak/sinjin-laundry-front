import SubLayout from "@/components/common/sub-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full max-w-[1024px] mx-auto px-[5.5%]">
      <SubLayout />
      {children}
    </section>
  );
}

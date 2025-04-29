import Footer from "@/components/common/footer";
import Hhh from "@/components/common/hhh";
import SubLayout from "@/components/common/sub-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hhh />
      {children}
      <Footer />
    </>
  );
}

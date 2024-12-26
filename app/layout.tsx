import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import localFont from "next/font/local";
import Footer from "@/components/common/footer";

const pretendard = localFont({
  src: "../assets/font/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "신진세탁기업",
  description: "신진 세탁기업 페이지 입니다. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

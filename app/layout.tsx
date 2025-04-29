import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ReactQueryProviders from "@/provider/tanstackProvider";

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
        <ReactQueryProviders>
          <main>{children}</main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}

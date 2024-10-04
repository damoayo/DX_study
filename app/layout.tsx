import config from "devextreme/core/config";
import { licenseKey } from "./devextreme-license";

config({ licenseKey });

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css"; // 원하는 테마로 변경 가능

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Detail from "./detail/page";
import Stock from "./stock/page";
import LocalArray from "./localArray/page";
import InfiniteScroll from "./InfiniteScrolling/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`dx-viewport ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <InfiniteScroll /> */}
        {/* <LocalArray /> */}
        {/* <Stock /> */}
        {/* <Detail /> */}
        {children}
      </body>
    </html>
  );
}

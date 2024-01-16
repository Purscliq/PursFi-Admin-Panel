import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import AntdConfig from "@/lib/AntdConfig";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PursFinance Admin ",
  description: "Purs Finance Business Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${archivo.className} bg-[#FAFAFA]`}>
        <AntdConfig>
         {children}
        </AntdConfig>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import StoreProvider from "@/store/StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
      <body className={`${archivo.className} !bg-[#FAFAFA]`}>
        <AntdRegistry>
          <StoreProvider>{children}</StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mail-segmenter",
  description:
    "BudouX を活用して、文章を指定の文字数で読みやすく区切ります。メールの作成等にどうぞ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

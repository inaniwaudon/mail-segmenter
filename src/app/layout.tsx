import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メールをいい感じに改行するやつ",
  description: "メールをいい感じに改行します",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "同旭Tony - AIGC领域深耕者",
  description: "同旭Tony的个人主页 - 互联网老兵，AIGC领域深耕者，专注AI绘画与AI视频",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

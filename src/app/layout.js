import { Dancing_Script, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Lưu Minh Nhiều - Hành Trình Tốt Nghiệp",
  description: "Tổng hợp quá trình học tập và thiệp mời tốt nghiệp của Lưu Minh Nhiều - Đại học Tôn Đức Thắng",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${dancingScript.variable} ${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

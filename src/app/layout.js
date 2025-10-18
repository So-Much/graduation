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
  
  // Open Graph meta tags for social sharing
  openGraph: {
    title: "Lưu Minh Nhiều - Hành Trình Tốt Nghiệp",
    description: "Tổng hợp quá trình học tập và thiệp mời tốt nghiệp của Lưu Minh Nhiều - Đại học Tôn Đức Thắng",
    url: "https://graduation-invited.vercel.app",
    siteName: "Thiệp Mời Tốt Nghiệp",
    images: [
      {
        url: "/774ADDBF-AAB6-42CA-B939-3C1E7A22993C.jpg",
        width: 1200,
        height: 630,
        alt: "Lưu Minh Nhiều - Thiệp Mời Tốt Nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  
  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    title: "Lưu Minh Nhiều - Hành Trình Tốt Nghiệp",
    description: "Tổng hợp quá trình học tập và thiệp mời tốt nghiệp của Lưu Minh Nhiều - Đại học Tôn Đức Thắng",
    images: ["/774ADDBF-AAB6-42CA-B939-3C1E7A22993C.jpg"],
  },
  
  // Additional meta tags
  keywords: "tốt nghiệp, thiệp mời, Lưu Minh Nhiều, đại học, Tôn Đức Thắng, graduation, invitation",
  authors: [{ name: "Lưu Minh Nhiều" }],
  creator: "Lưu Minh Nhiều",
  publisher: "Lưu Minh Nhiều",
  robots: "index, follow",
  alternates: {
    canonical: "https://graduation-invited.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Thiệp Mời Tốt Nghiệp" />
        <link rel="apple-touch-icon" href="/774ADDBF-AAB6-42CA-B939-3C1E7A22993C.jpg" />
      </head>
      <body
        className={`${dancingScript.variable} ${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

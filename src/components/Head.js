import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Lưu Minh Nhiều - Hành Trình Tốt Nghiệp</title>
      <meta name="title" content="Lưu Minh Nhiều - Hành Trình Tốt Nghiệp" />
      <meta name="description" content="Tổng hợp quá trình học tập và thiệp mời tốt nghiệp của Lưu Minh Nhiều - Đại học Tôn Đức Thắng" />
      <meta name="keywords" content="tốt nghiệp, thiệp mời, Lưu Minh Nhiều, đại học, Tôn Đức Thắng, graduation, invitation" />
      <meta name="author" content="Lưu Minh Nhiều" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://graduation-invited.vercel.app" />
      <meta property="og:title" content="Lưu Minh Nhiều - Hành Trình Tốt Nghiệp" />
      <meta property="og:description" content="Tổng hợp quá trình học tập và thiệp mời tốt nghiệp của Lưu Minh Nhiều - Đại học Tôn Đức Thắng" />
      <meta property="og:image" content="https://graduation-invited.vercel.app/774ADDBF-AAB6-42CA-B939-3C1E7A22993C.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Lưu Minh Nhiều - Thiệp Mời Tốt Nghiệp" />
      <meta property="og:site_name" content="Thiệp Mời Tốt Nghiệp" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://graduation-invited.vercel.app" />
      <meta property="twitter:title" content="Lưu Minh Nhiều - Hành Trình Tốt Nghiệp" />
      <meta property="twitter:description" content="Tổng hợp quá trình học tập và thiệp mời tốt nghiệp của Lưu Minh Nhiều - Đại học Tôn Đức Thắng" />
      <meta property="twitter:image" content="https://graduation-invited.vercel.app/774ADDBF-AAB6-42CA-B939-3C1E7A22993C.jpg" />
      <meta property="twitter:image:alt" content="Lưu Minh Nhiều - Thiệp Mời Tốt Nghiệp" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#f59e0b" />
      <meta name="msapplication-TileColor" content="#f59e0b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Thiệp Mời Tốt Nghiệp" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://graduation-invited.vercel.app" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}

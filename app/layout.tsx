import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '에이펙스이엔지 | APEX E&G - 스마트 빌딩 솔루션',
  description:
    '에이펙스이엔지(APEX E&G)는 건물자동화(BAS), 에너지관리(EMS), 조명제어 시스템 전문기업입니다. 스마트 빌딩 솔루션으로 에너지 효율을 극대화합니다.',
  keywords: ['건물자동화', 'BAS', '에너지관리', 'EMS', '조명제어', '디밍제어', '스마트빌딩', 'APEX'],
  authors: [{ name: '에이펙스이엔지' }],
  openGraph: {
    title: '에이펙스이엔지 | APEX E&G',
    description: '스마트 빌딩 솔루션 전문기업',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
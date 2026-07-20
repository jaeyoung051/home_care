import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '사상재가방문요양센터 | 부산 사상구 방문요양·방문목욕',
  description:
    '부산 사상구 감전동 사상재가방문요양센터입니다. 장기요양등급 상담, 방문요양, 방문목욕, 요양보호사 서비스와 보호자 중심의 돌봄 상담을 제공합니다.',
  keywords: [
    '사상재가방문요양센터',
    '사상구 방문요양',
    '부산 방문요양',
    '감전동 방문요양',
    '사상구 방문목욕',
    '장기요양등급',
    '요양보호사',
  ],
  verification: {
    other: {
      'naver-site-verification':
        '70065b5a465e08c3a9a4b9aa9e7c4f32bf0985bb',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
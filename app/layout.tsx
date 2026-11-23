import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PHONE_NUMBER_CENTER, NAVER_MAP_LINK } from '@/lib/constants'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

const siteUrl = 'https://www.sasangcare.com'
const siteName = '사상재가방문요양센터'
const siteTitle = `${siteName} | 부산 사상구 방문요양·방문목욕`
const siteDescription = '부산 사상구 감전동 사상재가방문요양센터. 방문요양·방문목욕 서비스와 장기요양등급 신청 상담을 안내합니다.'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#center`,
  name: siteName,
  url: `${siteUrl}/`,
  description: siteDescription,
  telephone: PHONE_NUMBER_CENTER,
  hasMap: NAVER_MAP_LINK,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '새벽시장로56번길 10 1층',
    addressLocality: '사상구',
    addressRegion: '부산광역시',
    addressCountry: 'KR',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: '부산광역시 사상구',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
      'naver-site-verification': [
        '70065b5a465e08c3a9a4b9aa9e7c4f32bf0985bb',
        'a0c00f246875ae3229bd547fcec8bca26537c1af',
      ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
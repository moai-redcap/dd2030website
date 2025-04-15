import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './global.css'
import './content.css'
import { BIZ_UDGothic } from 'next/font/google'

export const biz_udGothic400 = BIZ_UDGothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-biz-udgothic400',
  display: 'swap',
})

export const biz_udGothic700 = BIZ_UDGothic({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-biz-udgothic700',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'デジタル民主主義2030',
  description: 'デジタル民主主義2030プロジェクトポータルサイト',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${biz_udGothic400.className}`} suppressHydrationWarning>
      <body>
        <Header />
        <main>
          <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

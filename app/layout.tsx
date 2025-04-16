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
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'デジタル民主主義2030',
      url: 'https://dd2030.org',
      description:
        '技術の力で市民の声を活かし、政治をより良い形に進化させることを目指したプロジェクトです。',
      inLanguage: 'ja',
      // publisher: {
      //   '@type': 'Organization',
      //   name: 'デジタル民主主義2030運営事務局',
      //   url: 'https://example.com/about',
      //   logo: {
      //     '@type': 'ImageObject',
      //     url: 'https://example.com/logo.png',
      //   },
      // },
      sameAs: [
        'https://github.com/digitaldemocracy2030',
        'https://join.slack.com/t/w1740803485-clv347541/shared_invite/zt-32haul96s-Iopa_ET_YcqXWlpzpqABRA',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'デジタル民主主義2030とは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '技術の力で市民の声を活かし、政治をより良い形に進化させることを目指したプロジェクトです。',
          },
        },
        {
          '@type': 'Question',
          name: '誰がこのプロジェクトを運営していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '特定の団体が運営を担うのではなく、 一人ひとりが対等な立場で関わり、協力してプロジェクトを前進させることを目指した、緩やかにつながる参加型のコミュニティを志向します。',
          },
        },
        {
          '@type': 'Question',
          name: '一般市民も参加できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい、どなたでもご参加いただけます。<br/ ><a href="https://join.slack.com/t/w1740803485-clv347541/shared_invite/zt-32haul96s-Iopa_ET_YcqXWlpzpqABRA">こちらのSlack</a>からご参加下さい。',
          },
        },
      ],
    },
  ]
  return (
    <html lang="ja" className={`${biz_udGothic400.className}`} suppressHydrationWarning>
      <body>
        {/* JSON-LD構造化データを埋め込み */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>
          <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

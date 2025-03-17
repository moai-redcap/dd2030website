import {Metadata} from 'next'
import ClientProvider from '@/app/ClientProvider'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'

export const metadata: Metadata = {
  title: 'デジタル民主主義2030',
  description: 'デジタル民主主義2030プロジェクト',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <ClientProvider>
          <Header />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  )
}

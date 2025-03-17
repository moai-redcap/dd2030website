import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'デジタル民主主義2030',
  description: 'デジタル民主主義2030プロジェクトのウェブサイトです',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}

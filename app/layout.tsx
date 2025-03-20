import {Metadata} from 'next'
import ClientProvider from '@/app/ClientProvider'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Box} from '@chakra-ui/react'
import './global.css'
import './content.css'

export const metadata: Metadata = {
  title: 'デジタル民主主義2030',
  description: 'デジタル民主主義2030プロジェクトポータルサイト',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <ClientProvider>
          <Box className={'container'}>
            <Box mx={'auto'} maxW={'1000px'}>
              <Header />
              {children}
            </Box>
          </Box>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  )
}

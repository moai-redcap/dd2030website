import {Metadata} from 'next'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Box} from '@chakra-ui/react'
import './global.css'
import './content.css'
import {Provider} from '@/components/ui/provider'

export const metadata: Metadata = {
  title: 'デジタル民主主義2030',
  description: 'デジタル民主主義2030プロジェクトポータルサイト',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>
          <Box className={'container'}>
            <Box mx={'auto'} maxW={'1000px'}>
              <Header/>
              {children}
            </Box>
          </Box>
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}

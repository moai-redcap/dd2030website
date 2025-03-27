import path from 'path'
import fs from 'fs'
import {marked} from 'marked'
import {Markdown} from '@/components/Markdown'
import {Box, Image} from '@chakra-ui/react'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'markdown', 'about.md')
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)
  return (
    <Box>
      <Box mb={20}>
        <Image src={'/cover.png'} alt={'デジタル民主主義2030プロジェクト'} />
      </Box>
      <Markdown content={content}/>
    </Box>
  )
}

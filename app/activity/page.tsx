import path from 'path'
import fs from 'fs'
import {Box, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'

export default async function Page() {
  // マークダウンディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')

  // ディレクトリ内のファイル一覧を取得
  const files = fs.readdirSync(markdownDir)

  // slackとgithubのファイルをフィルタリング
  const slackFiles = files.filter(file => file.startsWith('slack') && file.endsWith('.md'))
  const githubFiles = files.filter(file => file.startsWith('github') && file.endsWith('.md'))

  // ファイル名からスラグを取得する関数（.mdを除去）
  const getSlugFromFilename = (filename: string) => filename.replace('.md', '')

  // ファイル名から表示名を取得する関数
  const getDisplayName = (filename: string) => {
    const slug = getSlugFromFilename(filename)
    return slug.charAt(0).toUpperCase() + slug.slice(1)
  }

  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>活動記録</Heading>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Slack活動記録</Heading>
        {slackFiles.length > 0 ? (
          <ul style={{listStyleType: 'none', padding: 0}}>
            {slackFiles.map((file) => (
              <li key={file} style={{marginBottom: '12px'}}>
                <Link href={`/activity/${getSlugFromFilename(file)}`} style={{color: '#3182ce'}}>
                  {getDisplayName(file)}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Text>Slack活動記録はまだありません。</Text>
        )}
      </Box>

      <hr style={{margin: '24px 0'}}/>

      <Box>
        <Heading as="h2" size="lg" mb={4}>GitHub活動記録</Heading>
        {githubFiles.length > 0 ? (
          <ul style={{listStyleType: 'none', padding: 0}}>
            {githubFiles.map((file) => (
              <li key={file} style={{marginBottom: '12px'}}>
                <Link href={`/activity/${getSlugFromFilename(file)}`} style={{color: '#3182ce'}}>
                  {getDisplayName(file)}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Text>GitHub活動記録はまだありません。</Text>
        )}
      </Box>
    </Box>
  )
}

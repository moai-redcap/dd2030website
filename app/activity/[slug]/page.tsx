import path from 'path'
import fs from 'fs'
import {marked} from 'marked'
import {Markdown} from '@/components/Markdown'
import {Box, Button, Flex, Image} from '@chakra-ui/react'
import Link from 'next/link'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({params}: PageProps) {
  const slug = (await params).slug

  // ファイルパスを構築
  const filePath = path.join(process.cwd(), 'markdown', `${slug}.md`)

  // ファイルが存在するか確認
  if (!fs.existsSync(filePath)) {
    // ファイルが存在しない場合はデフォルトのabout.mdを表示
    const defaultFilePath = path.join(process.cwd(), 'markdown', 'about.md')
    const markdown = fs.readFileSync(defaultFilePath, 'utf-8')
    const content = await marked(markdown)
    return (
      <Box>
        <Box mb={20}>
          <Image src={'/cover.png'} alt={'デジタル民主主義2030プロジェクト'}/>
        </Box>
        <Markdown content={content}/>
      </Box>
    )
  }

  // ファイルが存在する場合はそのファイルを表示
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)

  // ナビゲーションリンクの生成
  const navigation = generateNavigationLinks(slug)

  return (
    <Box>
      {/* <Box mb={20}>
                <Image src={'/cover.png'} alt={'デジタル民主主義2030プロジェクト'} />
            </Box> */}
      <Markdown content={content}/>

      {/* ナビゲーションリンク */}
      <Flex justifyContent="space-between" mt={8} mb={4}>
        {navigation.prev ? (
          <Link href={`/activity/${navigation.prev}`} passHref>
            <Button as="a" colorScheme="blue" variant="outline">
              ← 前へ
            </Button>
          </Link>
        ) : (
          <Box/>
        )}

        <Link href="/activity" passHref>
          <Button as="a" colorScheme="blue">
            一覧に戻る
          </Button>
        </Link>

        {navigation.next ? (
          <Link href={`/activity/${navigation.next}`} passHref>
            <Button as="a" colorScheme="blue" variant="outline">
              次へ →
            </Button>
          </Link>
        ) : (
          <Box/>
        )}
      </Flex>
    </Box>
  )
}

// ナビゲーションリンクを生成する関数
function generateNavigationLinks(currentSlug: string): { prev: string | null, next: string | null } {
  const result = {
    prev: null as string | null,
    next: null as string | null
  }

  // markdownディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')

  // ディレクトリ内のファイル一覧を取得
  const files = fs.readdirSync(markdownDir)

  // 現在のslugからファイル名を取得
  // const currentFile = `${currentSlug}.md`

  // slugから数値部分を抽出する正規表現
  const numRegex = /(\d+)w/
  const match = currentSlug.match(numRegex)

  if (match) {
    const currentNum = parseInt(match[1], 10)
    const prevNum = currentNum - 1
    const nextNum = currentNum + 1

    // プレフィックスとサフィックスを取得
    let prevSlug = ''
    let nextSlug = ''

    if (currentSlug.startsWith('slack')) {
      // Slackの場合は単純に数字を変更
      prevSlug = `slack${prevNum}w`
      nextSlug = `slack${nextNum}w`
    } else if (currentSlug.startsWith('github')) {
      // GitHubの場合はプロジェクト名部分を保持
      const projectPart = currentSlug.substring(currentSlug.indexOf('-'))
      prevSlug = `github${prevNum}w${projectPart}`
      nextSlug = `github${nextNum}w${projectPart}`
    }

    // 前のファイルを確認
    if (prevSlug) {
      const prevFile = `${prevSlug}.md`
      if (files.includes(prevFile)) {
        result.prev = prevSlug
      }
    }

    // 次のファイルを確認
    if (nextSlug) {
      const nextFile = `${nextSlug}.md`
      if (files.includes(nextFile)) {
        result.next = nextSlug
      }
    }
  }

  return result
}

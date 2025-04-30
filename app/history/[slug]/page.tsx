import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

export async function generateStaticParams() {
  // markdownディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')

  // ディレクトリ内のファイル一覧を取得
  const files = fs.readdirSync(markdownDir)

  // githubまたはslackで始まる.mdファイルのみを抽出し、拡張子を除去してスラッグとして使用
  return files
    .filter(
      (file) => file.endsWith('.md') && (file.startsWith('github') || file.startsWith('slack')),
    )
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
    }))
}

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug

  // ファイルパスを構築
  const filePath = path.join(process.cwd(), 'markdown', `${slug}.md`)

  // ファイルが存在するか確認
  if (!fs.existsSync(filePath)) {
    // ファイルが存在しない場合はデフォルトのabout.mdを表示
    return (
      <section>
        <p>ファイルが存在しません。</p>
        <Link href="/">トップページへ</Link>
      </section>
    )
  }

  // ファイルが存在する場合はそのファイルを表示
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const content = await marked(markdown)

  // ナビゲーションリンクの生成
  const navigation = generateNavigationLinks(slug)

  return (
    <div>
      <Markdown content={content} />

      {/* ナビゲーションリンク */}
      <div className="mt-2 mb-1 flex justify-center items-center gap-4">
        {navigation.prev ? (
          <Link
            href={`/activity/${navigation.prev}`}
            passHref
            className={`${buttonVariants()} h-11`}
          >
            <NavigateBeforeIcon />
            前へ
            <span></span>
          </Link>
        ) : (
          <div></div>
        )}

        <Link href="/activity" passHref>
          一覧に戻る
        </Link>

        {navigation.next ? (
          <Link
            href={`/activity/${navigation.next}`}
            passHref
            className={`${buttonVariants()} h-11`}
          >
            <span></span>次へ
            <NavigateNextIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

// ナビゲーションリンクを生成する関数
function generateNavigationLinks(currentSlug: string): {
  prev: string | null
  next: string | null
} {
  const result = {
    prev: null as string | null,
    next: null as string | null,
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

import path from 'path'
import fs from 'fs'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default async function Page() {
  // マークダウンディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')

  // ディレクトリ内のファイル一覧を取得
  const files = fs.readdirSync(markdownDir)

  // slackとgithubのファイルをフィルタリング
  const slackFiles = files.filter((file) => file.startsWith('slack') && file.endsWith('.md'))
  const githubFiles = files.filter((file) => file.startsWith('github') && file.endsWith('.md'))

  // ファイル名からスラグを取得する関数（.mdを除去）
  const getSlugFromFilename = (filename: string) => filename.replace('.md', '')

  // ファイル名から表示名を取得する関数
  const getDisplayName = (filename: string) => {
    const slug = getSlugFromFilename(filename)
    return slug.charAt(0).toUpperCase() + slug.slice(1)
  }

  return (
    <section className="mx-auto max-w-xl">
      <h2 className="text-3xl">活動記録</h2>
      <section>
        <h3 className="text-2xl mt-8 mb-4">Slack活動記録</h3>
        {slackFiles.length > 0 ? (
          <ul>
            {slackFiles.map((file) => (
              <li key={file}>
                <Link
                  href={`/activity/${getSlugFromFilename(file)}`}
                  className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
                >
                  <span></span>
                  {getDisplayName(file)}
                  <NavigateNextIcon />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Slack活動記録はまだありません。</p>
        )}
      </section>
      <section>
        <h3 className="text-2xl mt-8 mb-4">GitHub活動記録</h3>
        {githubFiles.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {githubFiles.map((file) => (
              <li key={file} style={{ marginBottom: '12px' }}>
                <Link
                  href={`/activity/${getSlugFromFilename(file)}`}
                  className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
                >
                  <span></span>
                  {getDisplayName(file)}
                  <NavigateNextIcon />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>GitHub活動記録はまだありません。</p>
        )}
      </section>
    </section>
  )
}

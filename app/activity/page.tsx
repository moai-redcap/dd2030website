import path from 'path'
import fs from 'fs'

export default async function Page() {
  // マークダウンディレクトリのパス
  const markdownDir = path.join(process.cwd(), 'markdown')
  const historyDir = path.join(markdownDir, 'history')

  const slackFiles: string[] = []
  const githubFiles: Record<string, string[]> = {}

<<<<<<< HEAD
  // slackとgithubのファイルをフィルタリング
  const slackFiles = files.filter((file) => file.startsWith('slack') && file.endsWith('.md'))
  const githubFiles = files.filter((file) => file.startsWith('github') && file.endsWith('.md'))

||||||| parent of d08b020 (activityページを修正: 新しいディレクトリ構造に対応し、TypeScriptエラーを修正)
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

=======
  if (fs.existsSync(historyDir)) {
    const weekDirs = fs.readdirSync(historyDir).filter((dir: string) => dir.startsWith('week'))
    
    weekDirs.forEach((weekDir: string) => {
      const weekDirPath = path.join(historyDir, weekDir)
      const weekFiles = fs.readdirSync(weekDirPath)
      
      if (weekFiles.includes('slack.md')) {
        slackFiles.push(`history/${weekDir}/slack`)
      }
      
      weekFiles.forEach((file: string) => {
        if (file !== 'slack.md' && file !== 'digest.md' && file.endsWith('.md')) {
          const project = file.replace('.md', '')
          
          if (!githubFiles[project]) {
            githubFiles[project] = []
          }
          
          githubFiles[project].push(`history/${weekDir}/${project}`)
        }
      })
    })
  }

  // ファイル名から表示名を取得する関数
  const getDisplayName = (slug: string) => {
    const parts = slug.split('/')
    const name = parts[parts.length - 1]
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

>>>>>>> d08b020 (activityページを修正: 新しいディレクトリ構造に対応し、TypeScriptエラーを修正)
  return (
    <section className="mx-auto max-w-xl">
      <h2 className="text-3xl">活動記録</h2>
      <section>
        <h3 className="text-2xl mt-8 mb-4">Slack活動記録</h3>
        {slackFiles.length > 0 ? (
<<<<<<< HEAD
          <p>Slackの活動記録は静的エクスポートに対応していないため削除されました。</p>
||||||| parent of d08b020 (activityページを修正: 新しいディレクトリ構造に対応し、TypeScriptエラーを修正)
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
=======
          <ul>
            {slackFiles.map((file: string) => (
              <li key={file}>
                <Link
                  href={`/activity/${file}`}
                  className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
                >
                  <span></span>
                  {getDisplayName(file)}
                  <NavigateNextIcon />
                </Link>
              </li>
            ))}
          </ul>
>>>>>>> d08b020 (activityページを修正: 新しいディレクトリ構造に対応し、TypeScriptエラーを修正)
        ) : (
          <p>Slack活動記録はまだありません。</p>
        )}
      </section>
      <section>
        <h3 className="text-2xl mt-8 mb-4">GitHub活動記録</h3>
<<<<<<< HEAD
        {githubFiles.length > 0 ? (
          <p>GitHubの活動記録は静的エクスポートに対応していないため削除されました。</p>
||||||| parent of d08b020 (activityページを修正: 新しいディレクトリ構造に対応し、TypeScriptエラーを修正)
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
=======
        {Object.keys(githubFiles).length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Object.entries(githubFiles).map(([project, files]: [string, string[]]) => (
              files.map((file: string) => (
                <li key={file} style={{ marginBottom: '12px' }}>
                  <Link
                    href={`/activity/${file}`}
                    className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
                  >
                    <span></span>
                    {getDisplayName(file)}
                    <NavigateNextIcon />
                  </Link>
                </li>
              ))
            ))}
          </ul>
>>>>>>> d08b020 (activityページを修正: 新しいディレクトリ構造に対応し、TypeScriptエラーを修正)
        ) : (
          <p>GitHub活動記録はまだありません。</p>
        )}
      </section>
    </section>
  )
}

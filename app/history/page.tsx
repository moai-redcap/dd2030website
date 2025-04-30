import path from 'path'
import fs from 'fs'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default async function Page() {
  const markdownDir = path.join(process.cwd(), 'markdown')

  const files = fs.readdirSync(markdownDir)

  // const historyFiles = files.filter(
  //   (file) => file.startsWith('history') && file.endsWith('.md'),
  // )
  const slackFiles = files.filter(
    (file) => file.startsWith('slack') && file.endsWith('.md'),
  )
  const githubFiles = files.filter(
    (file) => file.startsWith('github') && file.endsWith('.md'),
  )

  const getSlugFromFilename = (filename: string) => filename.replace('.md', '')


  const getProjectFromFilename = (filename: string) => {
    if (filename.startsWith('github')) {
      const match = filename.match(/github\d+w-(.+)\.md/)
      return match && match[1] ? match[1] : 'unknown'
    }
    return 'unknown'
  }

  const getWeekFromFilename = (filename: string) => {
    if (filename.startsWith('slack') || filename.startsWith('github') || filename.startsWith('history')) {
      const match = filename.match(/(?:slack|github|history)(\d+)w/)
      return match && match[1] ? parseInt(match[1], 10) : 0
    }
    return 0
  }

  const getProjectDisplayName = (projectName: string) => {
    switch (projectName) {
      case 'kouchou-ai':
        return '広聴AI'
      case 'idobata':
        return 'いどばた'
      case 'polimoney':
        return 'Polimoney'
      case 'website':
        return 'Webサイト'
      default:
        return projectName.charAt(0).toUpperCase() + projectName.slice(1)
    }
  }

  const weeklyActivities = {} as Record<
    number,
    { slack: string[]; github: Record<string, string[]> }
  >

  slackFiles.forEach((file) => {
    const week = getWeekFromFilename(file)
    if (!weeklyActivities[week]) {
      weeklyActivities[week] = { slack: [], github: {} }
    }
    weeklyActivities[week].slack.push(file)
  })

  githubFiles.forEach((file) => {
    const week = getWeekFromFilename(file)
    const project = getProjectFromFilename(file)

    if (!weeklyActivities[week]) {
      weeklyActivities[week] = { slack: [], github: {} }
    }

    if (!weeklyActivities[week].github[project]) {
      weeklyActivities[week].github[project] = []
    }

    weeklyActivities[week].github[project].push(file)
  })

  // historyFiles.forEach((file) => {
  //   // FIXME: implement
  // })
  const sortedWeeks = Object.keys(weeklyActivities)
    .map((week) => parseInt(week, 10))
    .sort((a, b) => a - b)

  return (
    <section className="mx-auto max-w-xl">
      <h2 className="text-3xl">プロジェクトの歴史</h2>

      {/* 週ごとの活動記録（時系列順） */}
      {sortedWeeks.map((week) => (
        <section key={week}>
          <h3 className="text-2xl mt-8 mb-4">第{week}週の活動</h3>

          {/* Slack活動 */}
          {weeklyActivities[week].slack.map((file) => (
            <Link key={file}
              href={`/history/${getSlugFromFilename(file)}`}
              className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
            >
              Slack
            </Link>
          ))}
          {
            Object.entries(weeklyActivities[week].github).map(
              ([project, files]) => (

                files.map((file) => (
                  <Link key={file}
                    href={`/history/${getSlugFromFilename(file)}`}
                    className={`${buttonVariants({ variant: 'link' })} h-11 mt-4`}
                  >
                    {getProjectDisplayName(project)}
                  </Link>
                )))
            )
          }
        </section >
      ))
      }


    </section >
  )
}

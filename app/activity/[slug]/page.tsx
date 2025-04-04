import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { Markdown } from '@/components/Markdown'
import { Box, Image } from '@chakra-ui/react'

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params

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
                    <Image src={'/cover.png'} alt={'デジタル民主主義2030プロジェクト'} />
                </Box>
                <Markdown content={content} />
            </Box>
        )
    }

    // ファイルが存在する場合はそのファイルを表示
    const markdown = fs.readFileSync(filePath, 'utf-8')
    const content = await marked(markdown)

    return (
        <Box>
            {/* <Box mb={20}>
                <Image src={'/cover.png'} alt={'デジタル民主主義2030プロジェクト'} />
            </Box> */}
            <Markdown content={content} />
        </Box>
    )
}
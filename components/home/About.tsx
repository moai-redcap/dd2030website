import {Box, Heading, Text} from '@chakra-ui/react'

export function About() {
  return (
    <Box>
      <Box maxW={'800px'} mx={'auto'} p={5}>
        <Heading>デジタル民主主義2030とは？</Heading>
        <Text>
          2030年には、情報技術により民主主義のあり方はアップデートされており、一人ひとりの声が政治・行政に届き、適切に合意形成・政策反映されていくような社会が当たり前になる―そんな未来を目指して立ち上げられたプロジェクトです。AIやデジタル技術の進化により、これまで不可能だった新しい形の市民参加や政策運営が可能になるはずだという信念に基づき、このプロジェクトは発足しました。
        </Text>
        <Text>
          本プロジェクトは、安野貴博とそのチームによって発案され、以下の3つの柱で構成されています
        </Text>
        <Text fontWeight={'bold'}>
          1.ブロードリスニングのさらなる進展：Talk to the Cityの実用化
        </Text>
        <Text fontWeight={'bold'}>
          2.民意による政策反映：デジタル上で大規模熟議が可能なプラットフォームの構築
        </Text>
        <Text fontWeight={'bold'}>
          3.政治資金の透明化：政治資金の見える化ダッシュボードの開発
        </Text>
      </Box>
    </Box>
  )
}

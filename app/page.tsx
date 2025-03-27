import {Box, Button, Heading, HStack, Image, Text} from '@chakra-ui/react'
import {Case} from '@/components/Case'
import Link from 'next/link'
import {HowTo} from '@/components/HowTo'


export default async function Page() {
  return (
    <Box>
      <Box mb={20}>
        <Image src={'/cover.png'} alt={'デジタル民主主義2030プロジェクト'} />
      </Box>
      <Box mx={'auto'} maxW={'900px'} mb={20}>
        <Heading fontSize={'3xl'} mb={5}>デジタル民主主義2030とは</Heading>
        <Text>
          2030年には、情報技術により民主主義のあり方はアップデートされており、一人ひとりの声が政治・行政に届き、適切に合意形成・政策反映されていくような社会が当たり前になる―そんな未来を目指して立ち上げられたプロジェクトです。AIやデジタル技術の進化により、これまで不可能だった新しい形の市民参加や政策運営が可能になるはずだという信念に基づき、このプロジェクトは発足しました。
        </Text>
        <HStack justify={'flex-end'} mt={5}>
          <Link href={'/about'}>
            <Button size={'xl'}>詳しくはこちら</Button>
          </Link>
        </HStack>
      </Box>
      <HowTo/>
      <Case/>
    </Box>
  )
}

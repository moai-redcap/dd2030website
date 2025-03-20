import {Box, HStack, Text} from '@chakra-ui/react'
import Link from 'next/link'

export function Footer() {
  return (
    <Box py={8} color={'#555555'} textAlign={'center'}>
      <Text fontWeight={'bold'} mb={2}>デジタル民主主義2030プロジェクト</Text>
      <HStack justify={'center'} gap={5} fontSize={'sm'}>
        <Link href={'https://github.com/digitaldemocracy2030'} target={'_blank'}>GitHub</Link>
        <Link href={'https://w1740803485-clv347541.slack.com/'} target={'_blank'}>Slack</Link>
        <Link href={'/policies/privacy'}>プライバシーポリシー</Link>
        <Link href={'/policies/terms'}>利用規約</Link>
      </HStack>
    </Box>
  )
}

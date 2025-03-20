import {Box, Heading, Text} from '@chakra-ui/react'

export function Header() {
  return (
    <Box
      fontWeight={'bold'}
      className={'gradientColor'}
      mb={5}
    >
      <Heading fontSize={'2xl'}>デジタル民主主義2030</Heading>
      <Text>デジ民2030プロジェクトポータルサイト</Text>
    </Box>
  )
}

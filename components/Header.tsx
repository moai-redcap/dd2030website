import {Box, Heading, Text} from '@chakra-ui/react'

export function Header() {
  return (
    <Box>
      <Box maxW={'1000px'} mx={'auto'} p={5}>
        <Heading as={'h1'} fontSize={'2xl'}>デジタル民主主義2030</Heading>
        <Text>デジタル民主主義2030プロジェクト</Text>
      </Box>
    </Box>
  )
}

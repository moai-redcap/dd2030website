import {Box, Card, Heading, Image, Text, VStack} from '@chakra-ui/react'

export function Case() {
  return (
    <Box mx={'auto'} maxW={'900px'}>
      <Heading fontSize={'3xl'} mb={5}>活用事例</Heading>
      <Text mb={10}>
        デジタル民主主義2030の取り組みはオープンソースで公開されており、誰でも自由に活用することができます。<br/>
        以下に、実際に活用された事例をご紹介します(順不同・敬称略)。
      </Text>
      <Box>
        <Box mb={10}>
          <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={5}>自治体</Text>
          <VStack>
            <Card.Root flexDirection="row" overflow="hidden" w={'full'}>
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">The perfect latte</Card.Title>
                  <Card.Description>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                  </Card.Description>
                </Card.Body>
              </Box>
            </Card.Root>
          </VStack>
        </Box>
        <Box mb={10}>
          <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={5}>政党・政治団体</Text>
          <VStack>
            <Card.Root flexDirection="row" overflow="hidden" w={'full'}>
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">The perfect latte</Card.Title>
                  <Card.Description>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                  </Card.Description>
                </Card.Body>
              </Box>
            </Card.Root>
          </VStack>
        </Box>
        <Box mb={10}>
          <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={5}>企業・その他</Text>
          <VStack>
            <Card.Root flexDirection="row" overflow="hidden" w={'full'}>
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">The perfect latte</Card.Title>
                  <Card.Description>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                  </Card.Description>
                </Card.Body>
              </Box>
            </Card.Root>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

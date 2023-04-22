import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Grid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
export default function CustomPropusal() {
  return (
    <Flex
      bg="white"
      align="center"
      justify="center"
      id="contact"
      minH={'100vh'}
      p={'3em 2em'}
      color={'black'}
    >
      <Grid
        borderRadius="lg"
        maxW={'1400px'}
        margin={'auto'}
        display={'grid'}
        templateColumns={{
          md: '1fr',
          lg: 'repeat(2, 1fr)',
        }}
        gap={{ base: '10em', lg: '2em' }}
      >
        <Box justifySelf={'center'} alignSelf={'center'} align={'center'}>
          <Heading>
            MAKING THE MOST OF MEDIA MARKETING FOR YOUR BUSINESS
          </Heading>
          <br></br>
          <Text>
            BULKSUP is an All-in-One Digital marketing & management agency that
            helps companies create a significant influence on the market. We
            produce materials your customers will love it. <br /> #just work it
          </Text>
        </Box>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 5 }}>
            <Box align={'center'}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}
              >
                Get Free propusal
              </Heading>
              <br />
              <Text>
                We’ll conduct an analysis of your project and deliver a custom
                proposal based on your marketing needs in one day!
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
              w={'80%'}
            >
              <Box borderRadius="lg" p={8} w={'100%'}>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement />
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Phone number</FormLabel>
                    <InputGroup>
                      <InputLeftElement />
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Project details</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="it's can be a pdf link or a description"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    isFullWidth
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Grid>
    </Flex>
  );
}

import React from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Box,
    Text,
    Grid,
    Select,
  } from '@chakra-ui/react';
  import { faPhone, faClock, faVideo } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Meeting() {
  return (
    <Box py={'10em'}>
    <Heading
      className="animate__animated animate__fadeInDown"
      fontWeight={600}
      lineHeight={'110%'}
      textAlign={'center'}
      textTransform={'uppercase'}
    >
      don't hesitate to reach out
    </Heading>
    <Grid
      borderRadius={'lg'}
      border={'2px solid white'}
      w={{ base: '100%', md: '70%' }}
      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      m={'5em auto'}
      alignItems={'center'}
    >
      <Heading
        background={'white'}
        color={'black'}
        gridColumn={'span 2'}
        py={'1em'}
        textAlign={'center'}
      >
        Schedule a meeting
      </Heading>
      <Flex>
        <Grid fontSize={'1.5em'} gap={'1em'} p={'2em'}>
          <Flex gap={'0.3em'} alignItems={'center'}>
            <FontAwesomeIcon icon={faPhone} />
            <Text>Discovery Call</Text>
          </Flex>
          <Flex gap={'0.3em'} alignItems={'center'}>
            <FontAwesomeIcon icon={faClock} />
            <Text>30min</Text>
          </Flex>
          <Flex gap={'0.3em'} alignItems={'center'}>
            <FontAwesomeIcon icon={faVideo} />
            <Text>Web conferencing details provided upon confirmation.</Text>
          </Flex>

          <Text>
            Schedule an initial discovery call to give us a chance to better
            understand your needs and also give yourself a chance to learn
            more about us.
          </Text>
        </Grid>
      </Flex>
      <Flex
        p={9}
        flex={2}
        align={'center'}
        justify={'center'}
        bg={'white'}
        color={'black'}
        h={'100%'}
      >
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            Fill the form
          </Heading>
          <FormControl id="full name">
            <FormLabel>Full name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>date and time</FormLabel>
            <Flex gap={'0.5em'}>
              <Input type="date" />
              <Select>
                <option>09:00</option>
                <option>10:00</option>
                <option>14:00</option>
                <option>15:00</option>
              </Select>
            </Flex>
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'purple'} variant={'solid'}>
              Schedule Event 
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Grid>
    <Heading
        fontWeight={'light'}
        gridColumn={'span 2'}
        textTransform={'uppercase'}
        py={'1em'}
        textAlign={'center'}
      >
        Or talk to an expert
        <br />
        +213566244153
      </Heading>
  </Box>
  )
}

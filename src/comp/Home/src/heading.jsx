import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import 'animate.css';
import backgroundImg from '../assets/zyro-image.png';
export default function Hero() {
  return (
    <>
      <Container
        maxW={'100vw'}
        h={'100vh'}
        display={'grid'}
        alignItems={'center'}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading>
            <Text
              className="animate__animated animate__fadeInDown"
              fontWeight={600}
              fontSize={'2em'}
              lineHeight={'110%'}
            >
              ACCELERATE YOUR WORK
            </Text>
            <Text
              className="animate__animated animate__fadeInUp"
              fontWeight={300}
              fontSize={'0.9em'}
              color={'white'}
            >
              ALL-IN-ONE DIGITAL MARKETING & MANAGEMENT AGENCY
            </Text>
          </Heading>
        </Stack>
       
      </Container>
    </>
  );
}

import React from 'react';
import Hero from './heading';
import CustomPropusal from './CustomPropusal';
import OurServices from './OurServices';
import { Box } from '@chakra-ui/react';
export default function Home() {
  return (
    <>
      <Box maxW={'1400px'} m={'auto'}>
        <Hero />
      </Box>
      <CustomPropusal />
      <OurServices />
    </>
  );
}

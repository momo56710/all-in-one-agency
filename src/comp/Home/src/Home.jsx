import React from 'react';
import Hero from './heading';
import CustomPropusal from './CustomPropusal';
import OurServices from './OurServices';
import AboutUs from './AboutUs';
import { Box } from '@chakra-ui/react';
import JoinUs from './JoinUs';
export default function Home() {
  return (
    <>
      <Box maxW={'1400px'} m={'auto'}>
        <Hero />
      </Box>
      <AboutUs/>
      <CustomPropusal />
      <OurServices />
      <JoinUs/>
    </>
  );
}

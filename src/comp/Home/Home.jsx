import React from 'react';
import Hero from './src/heading';
import CustomPropusal from './src/CustomPropusal';
import OurServices from './src/OurServices';
import AboutUs from './src/AboutUs';
import { Box } from '@chakra-ui/react';
import JoinUs from './src/JoinUs';
export default function Home() {
  return (
    <>
      
      <Box maxW={'1400px'} m={'auto'}>
        <Hero />
      </Box>
      <AboutUs />
      <CustomPropusal />
      <OurServices />
      <JoinUs />
    </>
  );
}

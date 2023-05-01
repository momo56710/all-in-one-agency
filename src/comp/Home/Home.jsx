import React, { useEffect } from 'react';
import Hero from './src/heading';
import CustomPropusal from './src/CustomPropusal';
import OurServices from './src/OurServices';
import AboutUs from './src/AboutUs';
import PlansAndPricingBtn from '../PlansAndPricingBtn';
import { Box } from '@chakra-ui/react';
import JoinUs from './src/JoinUs';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PlansAndPricingBtn />
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

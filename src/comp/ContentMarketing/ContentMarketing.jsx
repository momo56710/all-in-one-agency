import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Hero from './src/heading';
import OurServices from './src/OurServices';
import HowWeWork from './src/HowWeWork';
import PlansAndPricingBtn from '../PlansAndPricingBtn';
export default function ContentMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <PlansAndPricingBtn />
      <Hero />
      <OurServices />
      <HowWeWork />
    </Box>
  );
}

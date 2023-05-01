import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Hero from './src/heading';
import OurProjects from './src/OurProjects';
import FreeConsultation from './src/FreeConsultation';
import Branding from './src/Branding';
import PlansAndPricingBtn from '../PlansAndPricingBtn';
export default function Design() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
        <PlansAndPricingBtn/>
      <Hero />
      <OurProjects />
      <FreeConsultation />
      <Branding />
    </Box>
  );
}

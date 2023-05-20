import React from 'react'
import Hero from './src/heading'
import { Box } from '@chakra-ui/react'
import StartupsPlans from './src/StartupsPlans'
import MediaMonthlySubs from './src/MediaMonthlySubs'
import WebHostingMonthlySubs from './src/webhostingsubs'
export default function PlansAndPricing() {
  return (
    <Box>
        <Hero/>
        <StartupsPlans/>
        <MediaMonthlySubs/>
        <WebHostingMonthlySubs/>
    </Box>
  )
}

import React from 'react'
import Hero from './src/heading'
import { Box } from '@chakra-ui/react'
import StartupsPlans from './src/StartupsPlans'
import MediaMonthlySubs from './src/MediaMonthlySubs'
export default function PlansAndPricing() {
  return (
    <Box>
        <Hero/>
        <StartupsPlans/>
        <MediaMonthlySubs/>
    </Box>
  )
}

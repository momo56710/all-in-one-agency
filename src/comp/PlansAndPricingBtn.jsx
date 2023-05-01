import React from 'react';
import { motion } from 'framer-motion';
import { Box, Button } from '@chakra-ui/react';
export default function PlansAndPricingBtn() {
  return (
    <Box position={'fixed'} zIndex={'10000'} bottom={'2em'} right={'2em'}>
      <motion.button
        initial={{ opacity: 0.1 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="/plans-and-pricing">
          <Button colorScheme="purple"> Check palns and pricing</Button>
        </a>
      </motion.button>
    </Box>
  );
}

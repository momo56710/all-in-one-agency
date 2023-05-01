import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

export default function FreeConsultation() {
  return (
    <Box padding={'10em 0'} textAlign={'center'}>
   
      <Heading fontWeight={'light'}>
        SCHEDULE A FREE CONSULTATION TODAY.
      </Heading>
      <br />
      <br />
      <Button bg={'purple.400'}>GET STARTED</Button>
    </Box>
  );
}

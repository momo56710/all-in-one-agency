import { Box, Heading, Text, Image, Grid } from '@chakra-ui/react';
import webImg from '../assets/—Pngtree—modern flat design concept of_5332909.png';
import React from 'react';

export default function AboutUs() {
  return (
    <Box
      minH={'100vh'}
      display={'grid'}
      gridTemplateColumns={'1fr 1fr'}
      gap={'2em'}
    >
      <Image src={webImg} />
      <Grid height={'70%'} alignItems={'center'} paddingRight={'3em'}>
        <Grid gap={'3em'}>
          <Heading  color={'#DFD3EB'}>
            More than just a digital Agency
          </Heading>
          <Text fontSize={'1.5em'} lineHeight={'200%'}>
            We directly partner with our clients every step of the way,
            tailoring our approach to meet your business’ needs. We achieve real
            world results with a completely transparent, analytical and process
            oriented methodology.
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
}

import { Box, Heading, Text, Image, Grid } from '@chakra-ui/react';
import webImg from '../assets/—Pngtree—modern flat design concept of_5332909.png';
import React from 'react';

export default function AboutUs() {
  return (
    <Box
      minH={'50vh'}
      display={'grid'}
      gridTemplateColumns={{base : '1fr' , md:'1fr 1fr'}}
      gap={'2em'}
    >
      <Image src={webImg} height={'100%'}/>
      <Grid alignItems={'center'} padding={{base : "3em 0",sm:"0"}}>
        <Grid gap={'3em'} alignItems={'center'} justifyItems={'center'}>
          <Heading  color={'#DFD3EB'} textAlign={{base : 'center',md : 'left'}}>
            More than just a digital Agency
          </Heading>
          <Text fontSize={'1.5em'} lineHeight={'200%'} textAlign={{base : 'center',md : 'left'}}>
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

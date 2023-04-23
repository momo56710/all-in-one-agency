import { Box, Heading, Text, Button, Grid,Image } from '@chakra-ui/react';
import developerImg from '../assets/—Pngtree—flat design concept of programmers_5870919.png'
import React from 'react';
import { motion } from 'framer-motion';
export default function JoinUs() {
  return (
    <Grid minH={'100vh'} alignItems={'center'} padding={'0 3em'} templateColumns={{base: "1fr",sm:"1fr 1fr"}}>
      <Image src={developerImg}/>
      <Grid gap={'3em'}>
        <Heading color={'#DFD3EB'}>Join us – 100% remote</Heading>
        <Text fontSize={'1.5em'} lineHeight={'200%'}>
          We want to succeed alongside our clients, learn new stuff, and have a
          blast. At All Around, we provide a structured career path to help
          everyone realize their potential.
        </Text>
        <Box textAlign={'center'}> <motion.button whileHover={{scale : 1.1}} whileTap={{scale : 0.9}}><Button variant='outline'>Tell me more</Button></motion.button></Box>
      </Grid>
      
    </Grid>
  );
}

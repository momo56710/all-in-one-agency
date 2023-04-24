import { useEffect } from 'react';
import { Box, Heading, Text, Button, Grid, Image, transition } from '@chakra-ui/react';
import developerImg from '../assets/—Pngtree—flat design concept of programmers_5870919.png';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function JoinUs() {
  const { ref, inView } = useInView({ threshold: 1 });
  const animatePic = useAnimation();
  const animateTxt = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animatePic.start({
        scale: 1,
        transition: {
          duration: 0.5,
        },
      });
      animateTxt.start({
         x : 0,
         opacity : 1,
         transition :{
          duration : 0.5
         }
      })
    }
  }, [inView]);
  return (
    <Grid
    overflowX={'hidden'}
      minH={'100vh'}
      alignItems={'center'}
      padding={'0 3em'}
      templateColumns={{ base: '1fr', sm: '1fr 1fr' }}
    >
      <motion.div ref={ref} animate={animatePic} initial={{ scale: 0 }}>
        {' '}
        <Image src={developerImg} />
      </motion.div>
      <motion.div animate={animateTxt} initial={{ x : 500 ,opacity:0}}>
        <Grid gap={'3em'}>
          <Heading color={'#DFD3EB'}>Join us – 100% remote</Heading>
          <Text fontSize={'1.5em'} lineHeight={'200%'}>
            We want to succeed alongside our clients, learn new stuff, and have
            a blast. At All Around, we provide a structured career path to help
            everyone realize their potential.
          </Text>
          <Box textAlign={'center'}>
            {' '}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="outline">Tell me more</Button>
            </motion.button>
          </Box>
        </Grid>
      </motion.div>
    </Grid>
  );
}

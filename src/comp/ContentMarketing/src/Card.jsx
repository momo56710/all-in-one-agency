import { Heading, Box, Text, Image, Button, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function Card({ image, title, description,link }) {
  const navigate = useNavigate()
  return (
    <Box display={'grid'} alignItems={'center'}>
      <motion.div
        whileHover={{ scale: 1.1 }}
      >
        <Box
          w={{ base: '90vw',md:'30vw' }}
          h={'300px'}
          bg={'white'}
          display={'grid'}
          gap={'2em'}
          boxShadow={'2xl'}
          color={'#683BA4'}
          rounded={'lg'}
          p={6}
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Box>
            <motion.div layout="position">
              <Image src={image} w={'80px'} /> <br />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {title}
              </Heading>
            </motion.div>
              <>
                <br />
                <br />
                <Grid gap={'2em'}>
                  <motion.div>{description}</motion.div>
                </Grid>
              </>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

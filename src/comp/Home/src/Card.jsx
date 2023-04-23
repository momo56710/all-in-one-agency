import { Heading, Box, Text, Image, Button, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Card({ image, title, description }) {
  const [isOpen, steIsOpen] = useState(false);
  return (
    <Box display={'grid'} alignItems={'center'}>
      <motion.div
        onClick={() => {
          steIsOpen(!isOpen);
        }}
        layout
      >
        <Box
          w={{ base: '100%', sm: '250px' }}
          bg={'white'}
          display={'grid'}
          gap={'2em'}
          boxShadow={'2xl'}
          color={'#683BA4'}
          rounded={'lg'}
          p={6}
        >
          <Box>
            <motion.div layout="position">
              <Image src={image} w={'80px'} /> <br />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {title}
              </Heading>
            </motion.div>
           
            {isOpen && (
              <>
               <br /><br />
              <Grid gap={'2em'}>
                <motion.div>{description}</motion.div>
                <motion.div>
                  <Box textAlign={'center'}>
                    <Button>Learn more</Button>
                  </Box>
                </motion.div>
              </Grid>
              </>
            )}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

import { Heading, Box, Text, Image, Button, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function Card({ image, title, description,link }) {
  const navigate = useNavigate()
  const [isOpen, steIsOpen] = useState(false);
  return (
    <Box display={'grid'} alignItems={'center'}>
      <motion.div
        whileHover={{ scale: 1.1 }}
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

            {isOpen && (
              <>
                <br />
                <br />
                <Grid gap={'2em'}>
                  <motion.div>{description}</motion.div>
                  <motion.div>
                    <Box textAlign={'center'}>
                      <Button
                       onClick={()=>{navigate(`services/${link}`)}}
                      >
                        Learn more
                      </Button>
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

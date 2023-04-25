import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import AudiophileShope1 from '../assets/audiophile.jpg';
import AudiophileShope2 from '../assets/audiophile2.jpg';
import PayApi1 from '../assets/payapi.jpg';
import PayApi2 from '../assets/payapi2.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function OurProjects() {
  const navigate = useNavigate();
  return (
    <Box bg={'white'} padding={'3em 2em'}>
      <Heading
        color={'black'}
        textAlign={'center'}
        padding={'2em 0'}
        fontSize={'2em'}
      >
        THE LAST ECOMMERCE DEVELOPEMENT AGENCY YOU WILL EVER NEED
        <Text
          padding={'2em 0'}
          fontWeight={100}
          fontSize={'0.7em'}
          lineHeight={'110%'}
          color={'black'}
        >
          Take a look of our work
        </Text>
      </Heading>

      <Flex flexDirection={{base : 'column' , md : 'row'}} gap={{base : '4em' , md : "0"}}>
        <Grid rowGap={'1em'} alignItems={'center'}>
          <Image src={AudiophileShope1} />
          <Image src={AudiophileShope2} />
          <Box gridColumn={'span 2'} textAlign={'center'} padding={'2em 0'}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button border={'1px solid black'} color="black">
                <a
                  target="_blank"
                  href="https://audiophile-ecommerce-mbart13.vercel.app"
                >
                  Visit website
                </a>
              </Button>
            </motion.button>
          </Box>
        </Grid>
        <Grid rowGap={'1em'} alignItems={'center'}>
          <Image src={PayApi1} />
          <Image src={PayApi2} />
          <Box gridColumn={'span 2'} textAlign={'center'} padding={'2em 0'}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button border={'1px solid #232A32'} color="#232A32">
                <a target="_blank" href="https://fem-pay-api.vercel.app">
                  Visit website
                </a>
              </Button>
            </motion.button>
          </Box>
        </Grid>
      </Flex>
      <Text
        gridColumn={'2 span'}
        textAlign={'center'}
        padding={{ base :'2em 0', md :'2em 4em'}}
        fontWeight={100}
        fontSize={'1.5em'}
        lineHeight={'110%'}
        color={'black'}
      >
        Your website is the most important component of your marketing strategy.
        It serves as the hub of all of your online activity. It is where you
        will make money, or lose money. We design websites that help you
        generate the most conversions. We do this by delivering an attractive
        design, responsive theme, and user-friendly website.
      </Text>
    </Box>
  );
}

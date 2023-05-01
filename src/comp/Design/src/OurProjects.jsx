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
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import domaImg1 from "../asstes/doma brand/doma.png"
import domaImg2 from "../asstes/doma brand/logo arch.png"
import domaImg3 from "../asstes/doma brand/branding 0.png"
import domaImg4 from "../asstes/doma brand/brsanding 1.png"
import domaImg5 from "../asstes/doma brand/branding 15.png"
import domaImg6 from "../asstes/doma brand/branding 2.png"
import CHBKImg1 from "../asstes/CHBK/CHBK.jpg"
import CHBKImg2 from "../asstes/CHBK/logo arch.jpg"
import CHBKImg3 from "../asstes/CHBK/logo var.jpg"
import CHBKImg4 from "../asstes/CHBK/last.jpg"
import CHBKImg5 from "../asstes/CHBK/showcase.jpg"
import CHBKImg6 from "../asstes/CHBK/showcase2.jpg"
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
       WHY IS BRANDING IMPORTANT?
       
      </Heading>
      <Text
          padding={'2em 0'}
          fontWeight={100}
          fontSize={'1.3em'}
          lineHeight={'200%'}
          color={'black'}
        >
         Let’s face it. <br />
         Most startups and small businesses don’t know how to brand. They stick a random logo on t-shirts and business cards then consider themselves a brand.However, branding is about the feeling people have when they encounter you. It’s about creating a meaningful connection with your audience.Your potential customers will form an opinion about your brand within the first 3 seconds of interacting with it. They are judging your brand’s logo, your design, and your content. The outcome will determine if they trust your business, or not.People buy from brands they like and trust. 91% of consumers report they are more likely to buy from a brand they trust. The greatest marketing efforts will fail if you have poor branding. With the Internet, your customers have many options to choose from. Why should they choose your business? Great branding will help you stand out from the competition, establish trust, and ultimately drive more sales for your business.
        </Text>
        <Heading
        color={'black'}
        textAlign={'center'}
        padding={'2em 0'}
        fontSize={'2em'}
      >
       OUR WORK
       
      </Heading>
        <Flex flexDirection={{base : 'column' , md : 'row'}} gap={{base : '4em' , md : "2em"}}>
          <Grid gridTemplateColumns={'1fr 1fr'}>
            <Heading textAlign={'center'} color={'black'} gridColumn={'span 2'} paddingBottom={'2em'}>Doma</Heading>
            <Image src={domaImg1}/>
            <Image src={domaImg2}/>
            <Image src={domaImg3}/>
            <Image src={domaImg4}/>
            <Image src={domaImg5}/>
            <Image src={domaImg6}/>
    
          </Grid>
          <Grid gridTemplateColumns={'1fr 1fr'}>
          <Heading textAlign={'center'} color={'black'} gridColumn={'span 2'} paddingBottom={'2em'}>CHBK</Heading>
            <Image src={CHBKImg1}/>
            <Image src={CHBKImg2}/>
            <Image src={CHBKImg3}/>
            <Image src={CHBKImg4}/>
            <Image src={CHBKImg5}/>
            <Image src={CHBKImg6}/>
          </Grid>
          <Grid gridTemplateColumns={'1fr 1fr'}>

          </Grid>
        </Flex>
    </Box>
  );
}

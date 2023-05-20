import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Cards from './card';

export default function StartupsPlans() {
  const cardsContent = [
    {
      title: 'first step',
      price: '800',
      month: false,
      Specs: [
        'static Website',
        'logo and branding',
        '1 month subscription on first step social media management plan',
        '1 year subscription on first step web hosting plan'
      ],
    },
    {
      title: 'Pro',
      price: '2500',
      month: false,
      Specs: [
        'Complete Website',
        'logo and branding',
        '3 month subscription on Pro social media management plan',
        '3 years subscription on Pro web hosting plan'
        
      ],
    },
    {
      title: 'intermidate',
      price: '1300',
      month: false,
      Specs: [
        'Complete Website',
        'logo and branding',
        '2 month subscription on intermidate social media management plan',
        '2 years subscription on intermidate web hosting plan'
      ],
    },
   
  ];

  const specs = ['hello', 'hello', 'hello', 'hello'];
  return (
    <Box background={'#45276D'} padding={'3em'}>
      <Heading textAlign={'center'} fontWeight={400} paddingBottom={'2em'}>
        OUR PLANS FOR STARTUPS
      </Heading>
      <Flex justifyContent={'space-around'} flexWrap={'wrap'} gap={'1em'}>
        {cardsContent.map(e=>{
          return (
            <Cards price={e.price} month={e.month} title={e.title} Specs={e.Specs}/>
          )
        })}
      </Flex>
      <Box textAlign={'center'} marginTop={'3em'}><Button fontSize={'1.2em'} bg={'purple.400'} padding={'2em 2em'}>OR JOIN BULKSUP PROGRAM</Button></Box>
      
    </Box>
  );
}

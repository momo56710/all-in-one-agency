import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Cards from './card';

export default function WebHostingMonthlySubs() {
  const cardsContent = [
    {
      title: 'first step',
      price: '60',
      month: 'year',
      Specs: [
        '10 GB SSD Storage',
        'Free CDN',
        'Free Domain 1st Year',
        'Free SSL',
      ],
    },
    {
      title: 'Pro',
      price: '200',
      month: 'year',
      Specs: [
        '100 GB SSD Storage',
        'Free CDN',
        'Free Domain 1st Year',
        'Optimized CPU Resources',
        'Free Dedicated IP',
        'Free SSL',
        'Daily Website Backup',
      ],
    },
    {
      title: 'intermidate',
      price: '130',
      month: 'year',
      Specs: [
        '40 GB SSD Storage',
        'Free CDN',
        'Free Domain 1st Year',
        'Free SSL',
        'Daily Website Back Up',
      ],
    },
  ];
  return (
    <>
      {' '}
      <Box background={'#45276D'} padding={'3em'}>
        <Heading textAlign={'center'} fontWeight={400} paddingBottom={'2em'}>
          WEB HOSTING PLANS
        </Heading>
        <Flex justifyContent={'space-around'} flexWrap={'wrap'} gap={'1em'}>
          {cardsContent.map(e => {
            return (
              <Cards
                price={e.price}
                month={e.month}
                title={e.title}
                Specs={e.Specs}
              />
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

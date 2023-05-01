import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Cards from './card';

export default function MediaMonthlySubs() {
    const cardsContent = [
        {
          title: 'first step',
          price: '100',
          month: true,
          Specs: [
            'Platforms Included: Facebook & Instagram',
            'Target and audience setup',
            'Social Media Retargeting',
            'Results Analysis/Reporting',
            'PPC ad spend with networks $70-$150',
          ],
        },
        {
          title: 'Pro',
          price: '500',
          month: true,
          Specs: [
            'Platforms Included: Facebook & Instagram',
            '1 Page Marketing Strategy',
            'Target and audience setup',
            'Social Media Retargeting',
            'Results Analysis/Reporting',
            'PPC ad spend with networks $400-$700',
            
          ],
        },
        {
          title: 'intermidate',
          price: '250',
          month: true,
          Specs: [
            'Platforms Included: Facebook & Instagram',
            '1 Page Marketing Strategy',
            'Target and audience setup',
            'Social Media Retargeting',
            'Results Analysis/Reporting',
            'PPC ad spend with networks $240-$300',
          ],
        },
      ];
      return (
        <Box padding={'3em'}>
          <Heading textAlign={'center'} fontWeight={400} paddingBottom={'2em'}>
          SOCIAL MEDIA MANAGEMENT PLANS
          </Heading>
          <Flex justifyContent={'space-around'} flexWrap={'wrap'} gap={'1em'}>
            {cardsContent.map(e=>{
              return (
                <Cards price={e.price} month={e.month} title={e.title} Specs={e.Specs}/>
              )
            })}
          </Flex>
          
        </Box>
  )
}

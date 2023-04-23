import React from 'react';
import { Box, Text, Flex} from '@chakra-ui/react';
import Card from './Card';
import WebDevSvg from '../assets/web-development-svgrepo-com.svg';
import digitalmarketing from '../assets/marketing-mobile-information-speaker-news-svgrepo-com.svg';
import designService from '../assets/design-svgrepo-com.svg';
import webHosting from '../assets/host-svgrepo-com.svg';
export default function OurServices() {
  const services = [
    {
      image: WebDevSvg,
      title: 'WEB DEVELOPMENT',
      description:
        'We design websites that help you generate the most conversions. We do this by delivering an attractive design, responsive theme, and user-friendly website.',
    },
    {
      image: digitalmarketing,
      title: 'SOCIAL MEDIA MANAGE',
      description:
        'Our skilled team of social marketers will create, manage, and deliver top-performing social media campaigns for your business.',
    },
    {
      image: designService,
      title: 'BRAND ARCHITECTURE',
      description:
        'Branding is about the feeling people have when they encounter you. It’s about creating a meaningful connection with your audience.',
    },
    {
      image: webHosting,
      title: 'WEB HOSTING',
      description:
        'our web hosting service reliable and the state-of-the-art servers guarantee an uptime of 99.9%, ensuring your website is accessible to your visitors 24/7',
    },
  ];
  return (
    <Box padding={'3em'}>
      <Text align={'center'} fontSize={'2em'} padding={'3em 0'} fontWeight={'bold'}>
        ALL NECESSARY SERVICES FOR YOUR BRAND WAS INCLUDED IN ONE PLACE, HERE!
      </Text>
  
      <Flex
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        gap={'1em'}
        minH={'70vh'}
      >
        {services.map(e => {
          return (
            <Card image={e.image} title={e.title} description={e.description} />
          );
        })}
      </Flex>
    </Box>
  );
}

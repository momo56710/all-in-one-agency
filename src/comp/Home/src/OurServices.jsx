import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Card from './Card';
import WebDevSvg from '../assets/web-development-svgrepo-com.svg';
import digitalmarketing from '../assets/marketing-mobile-information-speaker-news-svgrepo-com.svg';
import designService from '../assets/design-svgrepo-com.svg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import '../css/ourservices.css'
export default function OurServices() {
  const {ref,inView} = useInView(
    {threshold : 0.5}
  )
  const animation = useAnimation()
  useEffect(()=>{
    console.log(inView)
    if(inView){
      animation.start({
        y : 0,
        opacity :1,
        transition : {
            type : 'spring',
            duration : 0.5   
        }
      })
    }

  },[inView])
  
  const services = [
    {
      image: WebDevSvg,
      title: 'WEB DEVELOPMENT',
      description:
        'We design websites that help you generate the most conversions. We do this by delivering an attractive design, responsive theme, and user-friendly website.',
      link: 'web-development',
    },
    {
      image: digitalmarketing,
      title: 'SOCIAL MEDIA MANAGE',
      description:
        'Our skilled team of social marketers will create, manage, and deliver top-performing social media campaigns for your business.',
      link: '#',
    },
    {
      image: designService,
      title: 'BRAND ARCHITECTURE',
      description:
        'Branding is about the feeling people have when they encounter you. It’s about creating a meaningful connection with your audience.',
      link: '#',
    },
  ];
  return (
    <Box padding={'3em'}>
      <Text
        align={'center'}
        fontSize={'2em'}
        padding={'3em 0'}
        fontWeight={'bold'}
      >
        ALL NECESSARY SERVICES FOR YOUR BRAND WAS INCLUDED IN ONE PLACE, HERE!
      </Text>

        <motion.div className='flex'  ref={ref} initial={{y : -100 , opacity : 0}} animate={animation}>
        {services.map(e => {
          return (
            <Card
              image={e.image}
              title={e.title}
              description={e.description}
              link={e.link}
            />
          );
        })}
        </motion.div>

    </Box>
  );
}

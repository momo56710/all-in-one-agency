import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Card from './Card';
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
      title: 'Performance Marketing',
      description:
        'We design websites that help you generate the most conversions. We do this by delivering an attractive design, responsive theme, and user-friendly website.',

    },
   
    {
      title: 'Analytics',
      description:
        'We work with a great analytics setup to deliver the best ROAS and scale. We help you get started, but also develop a custom-made reporting for your app ads based on Big Query & Tableau.',
    
    },
    {
      title: 'Creatives',
      description:
        'From web banners to animated video production – we brainstorm ideas and bring them to life. Whatever it takes to boost your app, brand, product, or service – have a look at our work and see how we make your app glow'
    },
  ];
  return (
    <Box padding={'3em'} background={'white'} >
      <Text
        align={'center'}
        fontSize={'2em'}
        fontWeight={'bold'}
        textColor={'black'}
        paddingBottom={'3em'}
      >
        OUR SERVICES
      </Text>

        <motion.div className='flex'  ref={ref} initial={{y : -100 , opacity : 0}} animate={animation}>
        {services.map(e => {
          return (
            <Card
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

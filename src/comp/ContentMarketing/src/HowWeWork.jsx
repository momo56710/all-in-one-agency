import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Card from './Card';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import '../css/ourservices.css'
export default function HowWeWork() {
  const {ref,inView} = useInView(
    {threshold : 0.2}
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
      title: 'Fully Managed Content Production',
      description:
        'Hand us your audience target in terms of demographic, geographic and lifestyle. Our team hand-picks and vets the best top creators that fit your niche best to create the most exquisite content library and innovative marketing strategies.',

    },
   
    {
      title: 'Scaling',
      description:
        'Increase ad spends on winning campaigns and entering new markets through new insights. Get the most out of your Paid Media Advertising funnel on every marketing platform. We adapt the content for other platforms (Snapchat, YouTube and META ads) to scale budgets',
    
    },
    {
      title: 'Optimization',
      description:
        'Our marketing experts test and optimize our campaigns based on your KPIs to ensure that you are maximizing your return on ad spend. We edit winning ads to create high-performing variations. We collaborate with our top creators to generate a library of high-performing ads.'
    },
    {
      title: 'Creative Research',
      description:
        'Study competitors and parallel industries to gain insights on top-performing social media marketing and ad concepts.'
    },
    {
      title: 'Detailed Reporting',
      description:
        'Get through and comprehensive performance reporting briefs to understand where reporting briefs to understand where your money is spent and take the pulse of your overall performance.'
    },
    {
      title: 'Conversion Driven',
      description:
        'With the help of our in-house conversion experts, we enhance our creators content to get better conversion optimization and meet your business objectives.'
    },
  ];
  return (
    <Box padding={'3em'} >
      <Text
        align={'center'}
        fontSize={'2em'}
        fontWeight={'bold'}
        paddingBottom={'3em'}
      >
       HOW WE WORK
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

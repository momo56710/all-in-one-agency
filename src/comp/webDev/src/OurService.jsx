import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import WebDesignPic from '../assets/webdesign.jpg';
export default function OurService() {
  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        alignItems={'center'}
        gap={'2em'}
        padding={'8em 2em'}
        lineHeight={'2em'}
      >
         <Heading fontSize={'2em'} gridColumn={{base : 'span 1',md : 'span 2'}} textAlign={'center'} paddingBottom={'3em'}>
            OUR WEB DESIGN SERVICES HELPS YOUR BUSINESS GROW BY DOING THE
            FOLLOWING:
          </Heading>
          
        <Image src={WebDesignPic}/>
        <Box>
          <Heading fontSize={'1em'}>
            DELIVER A WEBSITE EXPERIENCE YOUR VISITORS WILL LOVE:
          </Heading>
          <Text>
            94% of consumers view website design as the reason they trust or
            reject a website. If your visitors do not trust you, they will not
            do business with you. We will develop a website that builds
            credibility and helps your business stand out using the latest
            design technology.
          </Text>
        
          <Heading fontSize={'1em'} paddingTop={"2em"}>MAKE YOUR WEBSITE RESPONSIVE:</Heading>
          <Text>
            More than half of all Internet activity is on mobile devices. Your
            website should be responsive and able to adapt to any device,
            regardless of size. We will make your website responsive across all
            devices, including mobile phones, tablets, and desktop computers.
          </Text>
          <Heading fontSize={'1em'} paddingTop={"2em"}>
            DELIVER AN AWESOME USER-EXPERIENCE:
          </Heading>
          <Text>
            Make it easy for website users to navigate through your website. If
            it is too difficult for your users to get what they want, you will
            have high bounce rates and low conversions. We will make your
            website user-friendly by organizing your site’s menu structure, and
            adding CTAs on pages throughout your website. This will make it easy
            for your visitors to find what they are looking for.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

import { Box, Heading, Grid, Image, Text } from '@chakra-ui/react';
import brandingImg from '../asstes/help-our-clients-build-brand.jpg';
import React from 'react';

export default function Branding() {
  return (
    <Box bg={'white'} padding={'3em 2em'} textColor={'black'}>
      <Heading textAlign={'center'} fontWeight={'light'}>
        SHOULD YOU CONSIDER HIRING FOR BRANDING SERVICES?
      </Heading>
      <Grid
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        alignItems={'center'}
        gap={'2em'}
        padding={'8em 2em'}
        lineHeight={'2em'}
      >
        <Image src={brandingImg} />
        <Box>
          <Text fontSize={'1.2em'} lineHeight={'200%'}>
            If you are reading this right now then branding most likely is not
            your specialty. <br /> You’re probably thinking, “Can I get by with what I
            have? or Should I look for branding services?” <br /> You may not know the
            best colors for your logo, design for your website, or how to design
            in order to produce quality content. And for these reasons, our
            branding agency exists. <br /> With our branding services, you gain access
            to an expert who is dedicated to helping you build your brand. This
            person will assess your business and work with you to bring your
            dreams to reality. <br />
             Our small business branding agency can help you
            design your logo, build your website, and develop other assets for
            you to drive your business.&nbsp; We will help you nail your
            branding once and for all, and never settle for average again. <br /> Here
            are a few things we do to help our clients build brand (not the
            entire list): <br /> - Color Psychology <br /> - Font Styling <br /> - Brand Strategy <br /> -
            Target Audience Research <br /> - Tagline <br /> - Name Assistant <br /> - Logo Design  <br />-
            Website Design <br /> - Packaging <br /> - & More
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

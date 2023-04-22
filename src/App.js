import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Nav from './comp/navfun/nav';
import theme from './theme';
import Hero from './comp/heading';
import 'animate.css';
import CustomPropusal from './comp/CustomPropusal';
import OurServices from './comp/OurServices';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box data-theme="light" fontSize={'13px'}>
        <Nav />
        <Box maxW={'1400px'} m={'auto'}>
          <Hero />
        </Box>
        <CustomPropusal />
        <OurServices />
      </Box>
    </ChakraProvider>
  );
}

export default App;

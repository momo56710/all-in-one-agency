import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Nav from './comp/navfun/nav';
import theme from './theme';
import 'animate.css';
import Footer from './comp/Footer';
import RoutesRoot from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box data-theme="light" fontSize={'13px'}>
        <BrowserRouter>
         
          <Nav />
          <RoutesRoot />
          <Footer />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Nav from './comp/navfun/nav';
import theme from './theme';
import 'animate.css';
import Footer from './comp/Footer';
import Home from './comp/Home/Home';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box data-theme="light" fontSize={'13px'}>
        <Nav />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}/>
          </Routes>
        </BrowserRouter>

        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;

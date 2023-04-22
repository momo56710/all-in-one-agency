import Navbar from '../Navbar';
import { Box } from '@chakra-ui/react';
import './nav.css';
export default function Nav() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const nav = document.querySelector('#navbar')
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.style.top = '0';
    } else {
      nav.style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <Box id="navbar">
      <Navbar />
    </Box>
  );
}

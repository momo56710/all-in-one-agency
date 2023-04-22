import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('whiteAlpha.900', 'whiteAlpha.900')(props),
      bg: mode('#024977', '#024977')(props),
    },
  }),
};
const theme = extendTheme({
  styles,

});

export default theme;
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { breakpoints, global } from './constants';
import { Button, Input } from './overrides';

const theme = extendTheme({
  breakpoints ,
  styles: { global },

  components: {
    Input, Button,
  }
});

export const Theme = (props) => (<ChakraProvider theme={theme} {...props} />);

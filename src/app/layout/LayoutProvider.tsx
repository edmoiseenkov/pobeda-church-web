import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface ILayoutProviderData {
  height: number;
  width: number;
  isMobile: boolean;
}

export const LayoutContext = createContext(null);

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      h2: {
        fontSize: 46,
        fontWeight: 500,
      },
    },
  },

  components: {
    Input: {
      variants: {
        outline: {
          field: {
            border: '2px solid',
            borderColor: '#000',
            borderRadius: 0,
            _hover: {
              borderColor: '#000',
            }
          }
        },
        outlineReversed: {
          field: {
            background: 'transparent',
            border: '2px solid',
            borderColor: '#FFF',
            borderRadius: 0,
            _hover: {
              borderColor: '#FFF',
            }
          }
        }
      },
      sizes: {
        xxl: {
          field: {
            h: '65px',
            fontSize: 'lg',
            px: '16px',
          }
        },
      }
    },
    Button: {
      baseStyle: {
        borderRadius: 0,
      },
      variants: {
        solid: {
          background: 'black',
          color: 'white',
          _hover: {
            background: 'black',
            boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.5)',
          }
        },
        solidReversed: {
          background: 'white',
          color: 'black',
          _hover: {
            background: 'white',
            boxShadow: '6px 6px 0 rgba(255, 255, 255, 0.5)',
          }
        }
      },
      sizes: {
        xxl: {
          h: '65px',
          fontSize: 'lg',
          px: '32px',
        },
      }
    }
  }
});

// TODO: LayoutProvider --> ThemeComponent
// TODO: check @app/layout in whole project
export const LayoutProvider = (props) => (<ChakraProvider theme={theme} {...props} />);

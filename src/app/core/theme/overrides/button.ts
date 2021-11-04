import { ThemeSizes } from '../enums';

export const Button = {
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
    [ThemeSizes.xxl]: {
      h: '65px',
      fontSize: 'lg',
      px: '32px',
    },
  }
};

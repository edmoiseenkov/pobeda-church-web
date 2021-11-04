import { ThemeSizes } from '../enums';
import { ButtonStyle } from '@app/core/strapi';

export const Button = {
  baseStyle: {
    borderRadius: 0,
  },
  variants: {
    [ButtonStyle.DARK_SOLID]: {
      background: 'black',
      color: 'white',
      _hover: {
        background: 'black',
        boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.5)',
      }
    },
    [ButtonStyle.LIGHT_SOLID]: {
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

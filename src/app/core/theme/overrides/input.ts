export const Input = {
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
};

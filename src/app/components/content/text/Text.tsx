import { Box, Container } from '@chakra-ui/react';
import { IText } from '@app/core/strapi';

export const Text = (props: IText) => {
  return (
    <Container maxW="container.lg" px={0} mb={50} fontSize={22}>
      <Box
        dangerouslySetInnerHTML={{ __html: props.body }}
        sx={{
          img: {
            marginY: '60px',
            transform: {
              base: 'scale(1)',
              lg: 'scale(1.1)',
            },
          },
          p: {
            marginBottom: '20px',
            _last: {
              marginBottom: 0
            },
            padding: {
              base: '0 20px',
              lg: '0',
            },
          },
        }}
      />
    </Container>
  );
};

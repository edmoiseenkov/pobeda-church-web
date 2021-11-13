import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic'

const Embed = dynamic(() => import('react-embed'), { ssr: false });

import { IVideo } from '@app/core/strapi';

export type IVideoProps = IVideo;

export const Video = ({ url }: IVideoProps) => {
  return (
    <Container
      maxW="container.lg"
      sx={{
        p: {
          base: '20px',
          md: '0 20px'
        },
        iframe: {
          h: {
            base: 'calc(100vw / 2)',
            md: 500,
          }
        }
      }}
    >
      <Embed url={url} />
    </Container>
  );
};

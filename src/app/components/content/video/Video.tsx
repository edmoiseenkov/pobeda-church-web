import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { IVideo } from '@app/core/strapi';

export type IVideoProps = IVideo;

export const Video = ({ url }: IVideoProps) => {
  return (
    <Container
      maxW="container.lg"
      sx={{
        padding: '20px',
        iframe: {
          h: {
            base: 'calc(100vw / 2)',
            md: 500,
          }
        }
      }}
    >
      <ReactPlayer url={url} width={'100%'} />
    </Container>
  );
};

import { Box, Container } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IGallery } from '@app/core/strapi';

export type IGalleryProps = IGallery;

export const Gallery = ({ photos, configs = {} }: IGalleryProps) => {
  return (
    <Container
      maxW="container.lg"
      p={'20px'}
      sx={{
        '.swiper-button-prev': {
          color: 'white',
        },
        '.swiper-button-next': {
          color: 'white',
        },
        '.swiper-pagination-bullet-active': {
          bg: 'white',
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={configs?.navigation ?? true}
        pagination={configs?.pagination ?? { clickable: true }}
        loop={configs?.loop ?? true }
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <Box
              bg={`url(${photo.url}) center / cover`}
              w={'100%'}
              h={{ base: '300', md: '500' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

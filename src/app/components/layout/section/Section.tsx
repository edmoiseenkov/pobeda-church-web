import { Box, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import getConfig from 'next/config';

import { IImageSection } from '@app/core/strapi';
import { Button } from '@app/components/strapi';

import { textBlockStyles } from './constants';
import { SectionFullWidth } from './components';

const { publicRuntimeConfig } = getConfig();

export interface ISectionProps extends IImageSection {
  bgColor?: string;
  isRightSide?: boolean;
}

export const Section = (
  {
    bgColor = 'white',
    isRightSide = false,
    ...props
  }: ISectionProps
) => {
  const imageUrl = useMemo(() => `${publicRuntimeConfig.strapiApi}${props.image.url}`, [props.image]);

  if (props.isFullWidth) {
    return <SectionFullWidth imageUrl={imageUrl} {...props} />;
  }

  return (
    <Flex
      flexDir={isRightSide ? 'row-reverse' : 'row'}
      bg={{
        base: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl}) center / cover`,
        lg: bgColor
      }}
    >
      <Box
        bg={`url(${imageUrl}) center / cover`}
        h={'auto'}
        w={'50%'}
        display={{ base: 'none', lg: 'block' }}
      />

      <Flex
        flexDir={'column'}
        color={{ base: 'white', lg: 'black' }}
        p={{ base: '15px 15px 30px', lg: '96px' }}
        w={{ base: '100%', lg: '50%' }}
      >
        <Box
          dangerouslySetInnerHTML={{ __html: props.text }}
          sx={textBlockStyles}
        />

        {props.buttons.map((button, i) => (<Button key={i} sx={{ w: 'fit-content' }} {...button} />))}
      </Flex>
    </Flex>
  );
};

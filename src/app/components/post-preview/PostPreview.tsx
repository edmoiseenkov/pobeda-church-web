import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';

import { textBlockStyles } from './constants';
import { IPostPreviewProps } from './interfaces';

export const PostPreview = ({
  img,
  text,
  isReverse = false,
  buttonText,
  buttonLink = '#',
  bgColor = 'white',
  buttonVariant,
}: IPostPreviewProps) => {
  return (
    <Flex
      flexDir={isReverse ? 'row-reverse' : 'row'}
      bg={{
        base: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) center / cover`,
        lg: bgColor
      }}
    >
      <Box
        bg={`url(${img}) center / cover`}
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
          dangerouslySetInnerHTML={{ __html: text }}
          sx={textBlockStyles}
        />

        {/*TODO: add variants to buttons*/}
        <Button as={'a'} href={buttonLink} size={'xxl'} w={'fit-content'}>{buttonText}</Button>
      </Flex>
    </Flex>
  );
}

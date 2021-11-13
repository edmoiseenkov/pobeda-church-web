import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

import { ButtonStyle, ISection } from '@app/core/strapi';
import { Button } from '@app/components';
import { breakpoints } from '@app/core/theme/constants';

import { textBlockStyles } from './constants';
import { SectionFullWidth } from './components';

export interface ISectionProps extends ISection {
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
  const [isLG] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  if (props.isFullWidth) {
    return <SectionFullWidth {...props} />;
  }

  return (
    <Flex
      flexDir={isRightSide ? 'row-reverse' : 'row'}
      bg={{
        base: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image.url}) center / cover`,
        lg: bgColor
      }}
    >
      <Box
        bg={`url(${props.image.url}) center / cover`}
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

        {props.buttons.map((button, i) => (
          <Button
            key={i}
            sx={{ w: 'fit-content' }}
            {...button}
            style={isLG ? button.style : ButtonStyle.LIGHT_SOLID }
          />
        ))}
      </Flex>
    </Flex>
  );
};

import { Box, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import * as CSS from 'csstype';

import { Button } from '@app/components';
import { ButtonStyle, ISection, SectionImagePosition } from '@app/core/strapi';
import { breakpoints } from '@app/core/theme/constants';
import { useMediaQuery } from '@app/core/utils';

import { textBlockStyles } from './constants';
import { SectionFullWidth } from './components';

export type ISectionProps = ISection;

const flexDirMap: Partial<Record<SectionImagePosition, CSS.Property.FlexDirection>> = {
  [SectionImagePosition.LEFT]: 'row',
  [SectionImagePosition.RIGHT]: 'row-reverse',
};

const backgroundColors = ['#000', '#FFF', '#F5F9F0', '#FDF4EF'];

export const Section = (props: ISectionProps) => {
  const [isLG] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  const bgColorIndex = useMemo(() => {
    let i = +props.backgroundColor || 0;
    if (i >= backgroundColors.length || i < 0) {
      i = 0;
    }

    return i;
  }, [props.backgroundColor]);

  if (props.imagePosition === SectionImagePosition.FULL_WIDTH) {
    return <SectionFullWidth {...props} />;
  }

  return (
    <Flex
      flexDir={flexDirMap[props.imagePosition]}
      bg={{
        base: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image.url}) center / cover`,
        lg: backgroundColors[bgColorIndex]
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
        color={{
          base: 'white',
          lg: bgColorIndex === 0 ? 'white' : 'black'
        }}
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

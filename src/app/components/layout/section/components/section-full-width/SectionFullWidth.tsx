import { Box, Flex } from '@chakra-ui/react';

import { ISection } from '@app/core/strapi';
import { Button } from '@app/components';

export type ISectionFullWidthProps = ISection;

export const SectionFullWidth = (
  {
    text,
    buttons,
    image,
  }: ISectionFullWidthProps
) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        bg: {
          base: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.url}) center / cover`,
          lg: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image.url}) center / cover`,
        },
        color: 'white',
        height: '100vh',
        minH: 700,
        justifyContent: 'center',
        padding: 15,
        textAlign: 'center',

        a: {
          marginX: '8px',
        },
        p: {
          fontSize: '28px',
        },
      }}
    >
      <Box>
        <Box dangerouslySetInnerHTML={{ __html: text }} mb={4} />

        {(buttons || []).map((button, i) => (<Button key={i} {...button} />))}
      </Box>
    </Flex>
  );
};

import { Box, Flex } from '@chakra-ui/react';

import { IImageSection } from '@app/core/strapi';
import { Button } from '@app/components/strapi';

export interface ISectionFullWidthProps extends IImageSection {
  imageUrl: string;
}

export const SectionFullWidth = (
  {
    text,
    buttons,
    image,
    imageUrl
  }: ISectionFullWidthProps
) => {
  return (
    <Flex
      alignItems={'center'}
      bg={{
        base: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl}) center / cover`,
        lg: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl}) center / cover`,
      }}
      color={'white'}
      height={'100vh'}
      minH={700}
      justifyContent={'center'}
      p={15}
      textAlign={'center'}
      sx={{
        a: { marginX: '8px' },
        p: { fontSize: '28px' },
      }}
    >
      <Box>
        <Box dangerouslySetInnerHTML={{ __html: text }} mb={4} />

        {(buttons || []).map((button, i) => (<Button key={i} {...button} />))}
      </Box>
    </Flex>
  );
};

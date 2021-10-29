import { Flex, Image } from '@chakra-ui/react';

export const PageIntro = () => {
  return (
    <Flex
      alignItems={'center'}
      bg={'url("/images/photo-1424296308064-1eead03d1ad9 1.png") center top / cover'}
      h={'100vh'}
      minH={'600px'}
      justifyContent={'center'}
      width={'100%'}
    >
      <Image src="/images/text.png" alt="" />
    </Flex>
  );
}

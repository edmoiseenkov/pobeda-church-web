import { Button, Flex, Heading, Input, InputGroup } from '@chakra-ui/react';
import React, { useCallback } from 'react';

export const AskQuestion = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('AskQuestion:handleSubmit');
  }, []);

  return (
    <Flex flexDir={'column'} justifyContent={'center'} py={150} px={{ base: 50, lg: 250 }}>
      <Heading as={'h2'} textAlign={'center'} fontWeight={400} mb={25}>
        Можете задать анонимный вопрос и мы ответив вам в ближайшее время.
      </Heading>

      <Flex as={'form'} onSubmit={handleSubmit}>
        <InputGroup size={'xxl'}>
          <Input type="email" placeholder={'Ваш вопрос напишите тут'} />
          <Button type={'submit'}>Отправить</Button>
        </InputGroup>
      </Flex>
    </Flex>
  );
};

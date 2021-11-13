import { ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';

import { IModalBaseProps } from '@app/core/types';

export interface ITestModal extends IModalBaseProps {
  title: string;
}

export const TestModal = (props: ITestModal) => {
  return (
    <ModalContent>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Illum, totam, voluptates? Accusamus aliquid assumenda consectetur delectus dolor eius,
        explicabo molestias natus odio porro saepe, sed sint tempora vitae voluptate, voluptatum!
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={props?.onClose}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  );
};

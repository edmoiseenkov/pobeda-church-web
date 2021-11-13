import { useDisclosure } from '@chakra-ui/hooks';
import { Modal as ModalRoot, ModalOverlay } from '@chakra-ui/modal';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { ModalsMap } from '@app/core/constants';
import { Modal } from '@app/core/enums';

export interface IModal {
  open: (modalName: Modal, modalProps: unknown) => void;
}

const ModalContext = createContext(null);

export const useModal: () => IModal = () => {
  return useContext(ModalContext);
};

interface IModalProviderProps {
  [key: string]: unknown;
  children: any;
}

export const ModalProvider = ({ children, ...rest }: IModalProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalName, setModalName] = useState<Modal>(null);
  const [modalProps, setModalProps] = useState<any>({});

  const open = useCallback((modalName: Modal, modalProps: unknown) => {
    setModalName(modalName);
    setModalProps(modalProps || {});
    onOpen();
  }, [onOpen]);

  const ModalComponent = useMemo<React.FC<any> | null>(() => {
    const component = ModalsMap[modalName] as React.FC;
    if (!component) {
      console.warn(`"${modalName}" modal component doesn't exist...`)
      return null;
    }
    return component;
  }, [modalName]);

  const value: IModal = { open };

  return (
    <ModalContext.Provider value={value} {...rest}>
      <ModalRoot isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {ModalComponent ? <ModalComponent {...modalProps} onClose={onClose} /> : null}
      </ModalRoot>
      {children}
    </ModalContext.Provider>
  );
};

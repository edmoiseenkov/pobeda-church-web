import { Modal } from '@app/core/enums';
import { TestModal } from '@app/components';

export const ModalsMap: Record<Modal, unknown> = {
  [Modal.TEST]: TestModal,
};

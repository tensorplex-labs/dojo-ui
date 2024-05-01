import { useCallback, useContext } from 'react';
import { MODAL, ModalContext } from '../providers/modals';

type UseModal = (modal: MODAL) => {
  openModal: () => void;
  closeModal: () => void;
};

export const useModal: UseModal = (modal) => {
  const methods = useContext(ModalContext);

  const openModal = useCallback(() => {
    console.log('methods: ', methods);
    methods.openModal(modal);
  }, [methods, modal]);

  return {
    openModal,
    closeModal: methods.closeModal,
  };
};

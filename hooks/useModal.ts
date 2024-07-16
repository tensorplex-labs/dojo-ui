import { ModalContext } from '@/providers/modals';
import { MODAL } from '@/types/ProvidersTypes';
import { useCallback, useContext } from 'react';

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

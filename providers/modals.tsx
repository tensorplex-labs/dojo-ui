<<<<<<< HEAD
import ManageWalletConnectModal from '@/components/Wallet/manage-wallet-modal';
=======
import ManageWalletConnectModal from '@/components/Common/Wallet/manage-wallet-modal';
import { MODAL, ModalContextValue } from '@/types/ProvidersTypes';
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)
import { FC, PropsWithChildren, createContext, memo, useCallback, useMemo, useState } from 'react';

export const ModalContext = createContext({} as ModalContextValue);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [active, setActive] = useState<MODAL | null>(null);

  const openModal = useCallback((modal: MODAL) => {
    setActive(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActive(null);
  }, []);

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [closeModal, openModal]
  );

  const common = {
    onClose: closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* <WalletModal open={active === MODAL.wallet} {...common} /> */}
      <ManageWalletConnectModal
        open={active === MODAL.connect || active === MODAL.wallet}
        onClose={common.onClose}
        onSave={common.onClose}
      ></ManageWalletConnectModal>
      {/* <WalletsModalForEth
        open={active === MODAL.connect}
        metrics={walletsMetrics}
        hiddenWallets={['Opera Wallet']}
        {...common}
      /> */}
    </ModalContext.Provider>
  );
};

export default memo<FC<PropsWithChildren>>(ModalProvider);

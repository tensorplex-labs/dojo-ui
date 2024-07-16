'use client';

import { getFirstFourLastFour } from '@/utils/math_helpers';
import Web3Icon from './web3-icon';

interface Props {
  account?: string;
}
<<<<<<<< HEAD:components/Common/Wallet/wallet-button-badge.tsx
const WalletButtonBadge = (props: Props) => {
========
const WalletBadgeButton = (props: Props) => {
>>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/WalletButtonBadge.tsx
  const account = props.account;

  return (
    <div className="flex items-center justify-start gap-[5px]">
      <Web3Icon size={20} address={account ?? ''}></Web3Icon>
      <div id="flex walletBadeAccountAddress">{getFirstFourLastFour(props.account ?? '')}</div>
    </div>
  );
};

<<<<<<<< HEAD:components/Common/Wallet/wallet-button-badge.tsx
export default WalletButtonBadge;
========
export default WalletBadgeButton;
>>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/WalletButtonBadge.tsx

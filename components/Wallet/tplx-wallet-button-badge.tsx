'use client';

import { getFirstFourLastFour } from '@/utils/math_helpers';
import TPLXWeb3Icon from './tplx-web3-icon';

interface Props {
  account?: string;
}
const TPLXWalletButtonBadge = (props: Props) => {
  const account = props.account;

  return (
    <div className="flex items-center justify-start gap-[5px]">
      <TPLXWeb3Icon size={20} address={account ?? ''}></TPLXWeb3Icon>
      <div id="flex walletBadeAccountAddress">{getFirstFourLastFour(props.account ?? '')}</div>
    </div>
  );
};

export default TPLXWalletButtonBadge;

'use client';


import jazzicon from 'jazzicon-ts';
import React, { useEffect, useState } from 'react';
import TPLXWeb3Icon from './tplx-web3-icon';
import { getFirstFourLastFour } from '@/utils/math_helpers';

interface Props {
  account?: string;
}
const TPLXWalletButtonBadge = (props: Props) => {
  const account = props.account;

  return (
    <div className="flex items-center justify-start gap-[5px]">
      <TPLXWeb3Icon size={20} address={account ?? ''}></TPLXWeb3Icon>
      <div id="flex walletBadeAccountAddress">
        {getFirstFourLastFour(props.account ?? '')}
      </div>
    </div>
  );
};

export default TPLXWalletButtonBadge;

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCopy, IconExternalLink } from '@tabler/icons-react';

import React from 'react';

import { Connector, useDisconnect } from 'wagmi';
import { TPLXBrutCard } from '../BrutCard';
import { TPLXButton } from '../TPLXButton';
import TPLXWeb3Icon from './tplx-web3-icon';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { clearLocalStorage } from '@/utils/general_helpers';
import { useRouter } from 'next/router';


interface Props {
  connector: Connector;
  address?: string;
}
const TPLXLWalletConnectedCard = ({ connector, address }: Props) => {
  const { disconnectAsync } = useDisconnect();
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');
  const router = useRouter()
  const disconnectHandler = async () => {
    try {
      const result = await disconnectAsync()
      console.log("disconnected: ", result);
      clearLocalStorage();
      router.push('/')
    } catch(err) {
      console.error("Error in disconnecting", err);
    }

    //Do disconenct to your backend here as well.
  }

  return (
    <div className="p-2">
      <span className={cn(FontSpaceMono.className, 'text-xs font-bold')}>
        CONNECTED WALLET
      </span>
      <TPLXBrutCard className={cn(FontSpaceMono.className, 'p-3')}>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-[5px]">
              {connector && (
                <img
                  className="w-5 aspect-square"
                  alt="i"
                  src={connector.icon}
                ></img>
              )}
              {connector && connector.name}{' '}
              <div className="w-2 h-2 bg-[#00B6A6] rounded-full translate-y-[2px]"></div>
            </div>
            <TPLXButton
              onClick={disconnectHandler}
              variant={'secondary'}
              className={cn(
                FontSpaceMono.className,
                'hover:bg-primary hover:shadow-brut-sm hover:text-white px-[15px] py-[12px] h-[20px] text-xs text-font-primary font-bold',
              )}
            >
              DISCONNECT
            </TPLXButton>
          </div>
          <div className="flex items-center gap-[5px]">
            <TPLXWeb3Icon size={20} address={address ?? ''}></TPLXWeb3Icon>
            <span className={FontManrope.className}>
              {getFirstFourLastFour(address ?? '')}
            </span>
          </div>
          <div className="flex items-center justify-start gap-[20px]">
            <TPLXButton
              onClick={handleCopy}
              className="text-[#24837B] p-0 h-fit font-bold"
              variant={'link'}
            >
              <span className=" text-xs mr-[3px] underline-offset-2 underline">
                COPY ADDRESS
              </span>{' '}
              <IconCopy className="w-4 h-4" />
            </TPLXButton>
            <TPLXButton
              onClick={handleEtherscan}
              className="text-[#24837B] p-0 h-fit font-bold"
              variant={'link'}
            >
              <span className="text-xs mr-[3px] underline-offset-2 underline">
                VIEW ON ETHERSCAN
              </span>{' '}
              <IconExternalLink className="w-4 h-4" />
            </TPLXButton>
          </div>
        </div>
      </TPLXBrutCard>
    </div>
  );
};

export default TPLXLWalletConnectedCard;

import { Button } from '@/components/Common/Button';
import ModalContainer from '@/components/Common/Modal/ModalContainer';
import { ErrorModalProps } from '@/types/QuestionPageTypes';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import React from 'react';

const ErrorModal: React.FC<ErrorModalProps> = ({ open, onClose, errorMessage }) => {
  return (
    <ModalContainer
      className={'h-[206px] w-[512px]'}
      headerClassName={'h-12 pl-4'}
      bodyClassName="p-0"
      header={'Error'}
      open={open}
      onClose={onClose}
      onSave={onClose}
    >
      <div
        className={cn(
          `${FontManrope.className} py-4 px-6 border-b-2 border-black bg-accent opacity-60 text-[16px] leading-[120%] h-[88px] flex items-center`
        )}
      >
        <span>{errorMessage}</span>
      </div>
      <div className={'size-full p-1 text-right'}>
        <Button
          className={cn('w-[85px] h-[39px] mt-2 mr-4 hover:shadow-brut-sm text-[16px] text-white')}
          buttonText={'CLOSE'}
          onClick={onClose}
        />
      </div>
    </ModalContainer>
  );
};

export default ErrorModal;

import { UserCardProps } from '@/types/CommonTypes';
import { FontSpaceMono } from '@/utils/typography';
import { IconX } from '@tabler/icons-react';
import React from 'react';

const UserCard: React.FC<UserCardProps> = ({ closeModal, children }) => {
  const handleCloseModal = () => {
    closeModal(false);
  };
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={handleCloseModal}></div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 m-auto mt-[90px] flex w-[1115px] items-start justify-end p-4">
        {/* Modal */}
        <div className="relative h-auto w-full max-w-[401px] overflow-auto border-2 border-black bg-card-background text-black shadow-brut-sm">
          <div className="border-blueGray-200 flex items-start justify-between border-solid">
            <div className="justify-left flex h-[46px] w-[90%] items-center border border-gray-900 pl-[22px]">
              <h1 className={`${FontSpaceMono.className} text-base font-bold uppercase`}>Wallet & API Key</h1>
            </div>
            <div
              className="flex h-[46px] w-[10%] cursor-pointer items-center justify-center border border-gray-900 hover:opacity-60"
              onClick={handleCloseModal}
            >
              <IconX />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end border-gray-900 bg-card-background">{children}</div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

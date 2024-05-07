import { FontSpaceMono } from '@/utils/typography';
import { IconX } from '@tabler/icons-react';
import React from 'react';

interface UserCardProps {
  closeModal: Function;
  children?: React.ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({ closeModal, children }) => {
    const handleCloseModal = () => {
        closeModal(false);
      };
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={handleCloseModal}></div>

      {/* Modal Container */}
      <div className="fixed w-[1115px] mt-[90px] m-auto inset-0 z-50 flex items-start justify-end p-4">
        {/* Modal */}
        <div className="relative max-w-[401px] w-full h-auto overflow-auto shadow-brut-sm bg-[#F8F8F8] border-2 border-black text-black">
        <div className="flex items-start justify-between border-solid border-blueGray-200">
            <div className="w-[90%] h-[46px] border border-gray-900 flex items-center justify-left pl-[22px]">
              <h1 className={`${FontSpaceMono.className} font-bold text-base uppercase`}>Wallet & API Key</h1>
            </div>
            <div
              className="w-[10%] h-[46px] cursor-pointer border border-gray-900 flex justify-center items-center hover:opacity-60"
              onClick={handleCloseModal}
            >
              <IconX />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end border-gray-900 bg-[#F8F8F8]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
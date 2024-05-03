import { FontSpaceMono } from "@/utils/typography";
import { IconX } from "@tabler/icons-react";
import React, { ReactNode } from "react";

type ModalProps = {
  title: string;
    showModal: boolean;
    setShowModal: Function;
    btnText: string;
    children: ReactNode;
  };

function Modal({
  title,
  showModal,
  setShowModal,
  btnText,
  children
}: ModalProps) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="backdrop-brightness-50 backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
      <div className="relative">
        <div className="relative flex flex-col ouline-none focus:outline-none bg-[#F8F8F8] border-1 border-neutral-950 border-collapse border-[1px] shadow-brut-sm min-w-[300px] w-[900px] m-2 md:m-0">
          <div className="flex items-start justify-between border-solid border-blueGray-200">
            <div className="w-[90%] h-[46px] border border-gray-900 flex items-center justify-left pl-[22px]">
              <h1 className={`${FontSpaceMono.className} font-bold text-base`}>{title}</h1>
            </div>
            <div
              className="w-[10%] h-[46px] cursor-pointer border border-gray-900 flex justify-center items-center hover:opacity-60"
              onClick={handleCloseModal}
            >
              <IconX />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end border-gray-900  border bg-[#F8F8F8]">
            {children}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Modal;


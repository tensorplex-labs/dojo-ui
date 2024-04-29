import React from "react";

type ModalProps = {
    showModal: boolean;
    setShowModal: Function;
    content1: string;
    content2: string;
    btnText: string;
  };

function Modal({
  showModal,
  setShowModal,
  content1,
  content2,
  btnText,
}: ModalProps) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="backdrop-brightness-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
      <div className="relative w-auto max-w-3xl">
        <div className="relative flex flex-col ouline-none focus:outline-none bg-background border-1 border-neutral-950 border-collapse border-[1px] shadow-brut-sm min-w-[300px] max-w-[560px] max-h-[380px] m-2 md:m-0">
          <div className="flex items-start justify-between border-solid border-blueGray-200">
            <div className="w-[90%] h-[46px] border border-gray-900 flex items-center justify-left pl-[22px]">
              <img src=".././main_logo.svg" alt="Tensorplex Logo" />
            </div>
            <div
              className="w-[10%] h-[46px] cursor-pointer border border-gray-900 flex justify-center items-center hover:opacity-60"
              onClick={handleCloseModal}
            >
              {/* <CloseIcon /> */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-end p-3 border-gray-900  border bg-[#F8F8F8] pb-3">
            <div className="font-manrope pb-4 text-[#4C5B5A] text-sm">
              <p className="mb-[10px] pl-[10px]">{content1}</p>
              <p className="mb-[10px] pl-[10px]">{content2}</p>
            </div>
            <button
              className="w-full h-auto bg-[#00B6A6] font-spacemono text-white border-2 border-black uppercase cursor-pointer rounded-[0.7em] border-b-4 font-bold pt-2 pb-2 hover:bg-opacity-80 active:border-b-2"
              onClick={handleCloseModal}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

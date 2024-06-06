import { FontSpaceMono } from '@/utils/typography';
import { IconX } from '@tabler/icons-react';
import { ReactNode } from 'react';

type ModalProps = {
  title: string;
  showModal: boolean;
  setShowModal: Function;
  btnText: string;
  children: ReactNode;
  className?: string;
};

function Modal({ title, showModal, setShowModal, btnText, className, children }: ModalProps) {
  const handleCloseModal = () => {
    console.log(showModal);
    setShowModal(!showModal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden text-black outline-none backdrop-blur-sm backdrop-brightness-50 focus:outline-none">
      <div className="relative">
        <div className="ouline-none border-1 relative top-0 m-2 flex w-[900px] min-w-[300px] border-collapse flex-col border border-neutral-950 bg-[#F8F8F8] shadow-brut-sm focus:outline-none md:m-0">
          <div className="border-blueGray-200 flex items-start justify-between border-solid">
            <div className="justify-left flex h-[46px] w-[90%] items-center border border-gray-900 pl-[22px]">
              <h1 className={`${FontSpaceMono.className} text-base font-bold`}>{title}</h1>
            </div>
            <div
              className="flex h-[46px] w-[10%] cursor-pointer items-center justify-center border border-gray-900 hover:opacity-60"
              onClick={handleCloseModal}
            >
              <IconX />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end border  border-gray-900 bg-[#F8F8F8]">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

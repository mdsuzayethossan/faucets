import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import img1 from "../assets/MetaMask.551edf10.svg";
import img2 from "../assets/WalletConnect.d0b10794.svg";
export default function MyModal({ modal, setModal }) {
  let [isOpen, setIsOpen] = useState(modal);

  function closeModal() {
    setModal(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[450px] transform overflow-hidden rounded bg-white p-[25px] text-left align-middle shadow-xl transition-all border border-[#eee] h-auto">
                  <div className="text-right flex justify-between items-center">
                    <h2 className="text-[25px] font-semibold text-black">
                      Connect your wallet
                    </h2>
                    <XCircleIcon
                      className="w-7 cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-center">
                    <div className="p-5 m-[10px] bg-[#f5f7fd] text-center w-1/2 cursor-pointer">
                      <img
                        src={img1}
                        alt=""
                        className="w-[100px] h-[100px] mx-auto"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        MetaMask
                      </h3>
                    </div>
                    <div className="p-5 m-[10px] bg-[#f5f7fd] text-center w-1/2 cursor-pointer">
                      <img
                        src={img2}
                        alt=""
                        className="w-[100px] h-[100px] mx-auto"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        WalletConnect
                      </h3>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

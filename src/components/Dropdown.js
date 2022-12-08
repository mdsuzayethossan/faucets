import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import icon1 from "../assets/arbitrum.79164059.svg";
import icon2 from "../assets/avalanche.234db155.svg";
import icon3 from "../assets/bsc.d8c61230.svg";
import icon5 from "../assets/fantom.3f8c71bb.svg";
import icon6 from "../assets/harmony.02c2e3ba.svg";
import icon7 from "../assets/MetaMask.551edf10.svg";
import icon8 from "../assets/poa.90512ab9.svg";

export default function Example() {
  const dropdownContent = [
    {
      name: "Arbitrum Rinkeby",
      img: icon1,
    },
    {
      name: "Avalanche Fuji",
      img: icon2,
    },
    {
      name: "BNB Chain Testnet",
      img: icon3,
    },
    {
      name: "Fantom Testnet",
      img: icon5,
    },
    {
      name: "Harmony Testnet",
      img: icon6,
    },
    {
      name: "POA Network Sokol",
      img: icon7,
    },
    {
      name: "Polygon Mumbai",
      img: icon8,
    },
  ];
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 text-gray font-semibold text-sm">
            Ethereum Kovan
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-6 mt-5 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white border-1 border-[#eee] shadow-lg">
            <div className="px-3 py-3 ">
              {dropdownContent.map((item) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#eef2fe]" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                    >
                      <img
                        className="w-[15px] h-[15px] mr-[10px]"
                        src={item.img}
                        alt=""
                      />
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

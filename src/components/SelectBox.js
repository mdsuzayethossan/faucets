import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import icon1 from "../assets/arbitrum.79164059.svg";
import icon2 from "../assets/avalanche.234db155.svg";
import icon3 from "../assets/bsc.d8c61230.svg";
import icon5 from "../assets/fantom.3f8c71bb.svg";
import icon6 from "../assets/harmony.02c2e3ba.svg";
import icon7 from "../assets/MetaMask.551edf10.svg";
import icon8 from "../assets/poa.90512ab9.svg";
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

export default function SelectBox() {
  const [selected, setSelected] = useState(dropdownContent[0]);

  return (
    <div className="w-56">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div
              className={`truncate flex items-center ${
                selected ? "font-medium" : "font-normal"
              }`}
            >
              <img
                className="w-[15px] h-[15px] mr-[10px]"
                src={selected.img}
                alt=""
              />
              <span>{selected.name}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {dropdownContent.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <div
                        className={`truncate flex items-center ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <img
                          className="w-[15px] h-[15px] mr-[10px]"
                          src={person.img}
                          alt=""
                        />
                        <span>{person.name}</span>
                      </div>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

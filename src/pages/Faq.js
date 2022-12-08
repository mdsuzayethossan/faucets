import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Faq() {
  const faqContent = [
    {
      id: 1,
      q: "What is a blockchain oracle?",
      a: `A blockchain oracle is any system that services a smart contract
            by providing it with data from an off-chain source or connecting
            it with an off-chain system. Oracles enable connectivity between
            blockchains and real-world data by interfacing with external
            APIs and data feeds, allowing them to pull data for or push data
            from a smart contract.`,
    },
    {
      id: 2,
      q: "Why do blockchains need oracles?",
      a: "Oracles enable smart contracts to interact with off-chain resources. Without oracles, smart contracts can only access data within a blockchain, severely limiting their potential applications. The majority of industry-changing real-world use cases for smart contracts require off-chain data and computation for proper execution and often an integration with existing payment rails to settle a contract. For example, a smart contract may require high-quality weather data from a reputable source like AccuWeather to trigger a transaction. It may also require the ability to pay out escrowed fiat currency through existing financial infrastructure, such as a bank checking account.",
    },
    {
      id: 3,
      q: "What is the Chainlink Network?",
      a: "The Chainlink Network refers to all of the decentralized oracle networks actively operating using the Chainlink protocol, including individual oracles, data providers running their own node, and node operators. By enabling smart contracts to quickly and securely connect to off-chain data sources using decentralized oracle networks, the Chainlink Network helps developers build more robust and diverse blockchain applications using real-world inputs and outputs. Additionally, as middleware between low-level blockchain protocols and external, off-chain data sources, the Chainlink Network serves as an abstraction layer for data providers to easily sell their existing APIs to any blockchain network.",
    },
    {
      id: 4,
      q: "Where can I explore the performance and reliability of the Chainlink Network?",
      a: "The Chainlink Price Feeds page provides real-time visualizations of each decentralized price feed that provides on-chain exchange rates for cryptocurrencies, stablecoins, commodities, and indices. Users can explore each individual price feed, which offers transparency around which nodes power each feed, each node’s latest response, how often feed updates occur, the gas price paid by each node, the users sponsoring each feed, and hyperlinks to on-chain transactions.requests, average response times, and more.",
    },
    {
      id: 4,
      q: "What is Chainlink Verifiable Random Function (VRF)?",
      a: "Chainlink VRF brings secure random number generation to the blockchain. Chainlink VRF solves the difficult problem of providing an on-chain source of randomness that is publicly verifiable to be authentic and tamper-proof. Many smart contracts are augmenting the value they can create by utilizing Chainlink VRF, specifically applications such as gaming dApps that must prove to their users that their source of randomness is provably fair and resistant to manipulation from any external entity. Chainlink VRF enables and accelerates the development of smart contracts focused on blockchain gaming, security, layer-two protocols, and various other use cases",
    },
  ];
  return (
    <div className="w-full px-4 pt-16">
      <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        {faqContent.map((faq) => (
          <Disclosure className="my-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  key={faq.id}
                  className="flex border py-3 bg-[rgba(156,31,233,0.1)] border-[#eee] w-full justify-between rounded bg-purple-100 px-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                  <span>{faq.q}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-white border border-[#eee]">
                  {faq.a}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

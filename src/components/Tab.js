import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyTab() {
  let [categories] = useState({
    "ETH Transaction History": [
      {
        id: 1,
        time: "12:30 AM",
        amount: "487",
        hash: "4s8er5s5fe57rjmxnfuewrurks",
      },
      {
        id: 3,
        time: "10:30 AM",
        amount: "875",
        hash: "sf7s7ers4e7r7wser",
      },
      {
        id: 3,
        time: "11:30 AM",
        amount: "797",
        hash: "se4s7er7",
      },
    ],
    "TestLink Transaction History": [
      {
        id: 1,
        time: "8:30 AM",
        amount: "748",
        hash: "7s7effkeurusue4",
      },
      {
        id: 3,
        time: "10:23 AM",
        amount: "974",
        hash: "sfe7r7sr4fer",
      },
      {
        id: 3,
        time: "11:10 AM",
        amount: "874",
        hash: "s4e7s8er",
      },
    ],
  });
  const thStyle =
    "text-sm font-semibold p-2 min-w-[80px] border border-[#eee] text-center";
  const tdStyle =
    "text-sm font-medium p-2 min-w-[80px] border border-[#eee] text-center";

  return (
    <div>
      <Tab.Group>
        <Tab.List className="max-w-md flex space-x-1 rounded-xl bg-[#eef2fe] p-2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "rounded-lg py-2.5 px-2.5 text-sm font-semibold leading-5 text-primary",
                  selected
                    ? "bg-primary text-[#fff] shadow outline-0"
                    : "text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div class="flex flex-col">
                <div class="overflow-x-hidden">
                  <div>
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <th scope="col" class={thStyle}>
                              Sr
                            </th>
                            <th scope="col" class={thStyle}>
                              Time
                            </th>
                            <th scope="col" class={thStyle}>
                              Amount
                            </th>
                            <th scope="col" class={thStyle}>
                              Hash
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((post) => (
                            <tr>
                              <td key={post.id} class={tdStyle}>
                                {post.id}
                              </td>
                              <td class={tdStyle}>{post.time}</td>
                              <td class={tdStyle}>{post.amount}</td>
                              <td class={tdStyle}>{post.hash}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

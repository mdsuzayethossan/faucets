import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import React from "react";

const Form = () => {
  return (
    <div>
      <div className="p-[10px] flex items-center bg-[#eef2fe]">
        <ExclamationTriangleIcon
          className="text-primary mr-3"
          width="1em"
          height="1em"
        />
        <p>
          Your wallet is connected to{" "}
          <span className="font-bold">Ethereum Kovan</span>, so you are
          requesting <span className="font-bold">Ethereum Kovan</span> Link/ETH.
        </p>
      </div>
    </div>
  );
};

export default Form;

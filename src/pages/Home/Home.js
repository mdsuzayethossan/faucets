import React from "react";
import Form from "../../components/Form";
import Notice from "../../components/Notice";
import Title from "../../components/Title";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import RequestHistory from "../../components/RequestHistory";
const Home = () => {
  return (
    <>
      <Notice />
      <div className="container">
        <Title />
        <div className="bg-white py-[25px] px-5">
          <div className="p-[10px] flex items-center bg-[#eef2fe]">
            <ExclamationTriangleIcon
              className="text-primary mr-3"
              width="1em"
              height="1em"
            />
            <p className="text-black">
              Your wallet is connected to{" "}
              <span className="font-bold">Ethereum Kovan</span>, so you are
              requesting <span className="font-bold">Ethereum Kovan</span>{" "}
              Link/ETH.
            </p>
          </div>
          <Form></Form>
          <RequestHistory />
        </div>
      </div>
    </>
  );
};

export default Home;

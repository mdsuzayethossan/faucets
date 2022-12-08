import React from "react";

const Form = () => {
  return (
    <div>
      <form className="w-1/2 mt-[15px]">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold text-[13px] text-primary">
            Wallet Address
          </label>
          <input
            className="outline-0 border border-[#eee] w-full rounded-[3px] p-[10px] mt-[5px] placeholder:text-sm"
            type="text"
            placeholder="Wallet Address..."
          />
        </div>
        <div className="flex items-center mt-[10px]">
          {" "}
          <div className="w-1/2 mr-[15px] flex flex-col">
            <label
              htmlFor=""
              className="font-semibold text-[13px] text-primary"
            >
              Request Type
            </label>
            <input
              readOnly
              className="outline-0 border bg-[#FAFAFA] placeholder:text-gray border-[#eee] w-full rounded-[3px] p-[10px] mt-[5px] placeholder:text-sm"
              type="text"
              placeholder="20 Test Link"
            />
          </div>
          <div className="w-1/2 mt-5">
            <input
              readOnly
              className="outline-0 border bg-[#FAFAFA] placeholder:text-gray border-[#eee] w-full rounded-[3px] p-[10px] mt-[5px] placeholder:text-sm"
              type="text"
              placeholder="0.5 ETH"
            />
          </div>
        </div>
        <div className="mt-[15px]">
          <iframe
            title="reCAPTCHA"
            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdsGQAhAAAAAHMD_9lkPJbQA6I6kA2AxFaVFrF0&amp;co=aHR0cHM6Ly9mYXVjZXRzLm5ldGxpZnkuYXBwOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=Km9gKuG06He-isPsP6saG8cn&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=au9oh66uguk6"
            width="304"
            height="78"
            role="presentation"
            name="a-nj3cq3s0l2l9"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
        <button
          className="mt-[15px] py-[10px] px-[15px] rounded-[3px] font-semibold text-[13px] bg-primary text-white capitalize"
          type="submit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default Form;

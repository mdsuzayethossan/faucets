import React from "react";

const Register = () => {
  return (
    <div className="h-screen mt-[10%]">
      <div className="max-w-md shadow-md border border-[#eee] bg-white mx-auto p-5">
        <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
          Sign Up
        </h2>
        <form className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold text-[13px] text-primary">
            Email
          </label>
          <input
            className="outline-0 border border-[#eee] w-full rounded-[3px] p-[10px] mt-[5px] placeholder:text-sm"
            type="email"
            placeholder="Enter your Email"
          />
        </form>
        <div className="w-full flex flex-col mt-3">
          <label htmlFor="" className="font-semibold text-[13px] text-primary">
            Password
          </label>
          <input
            className="outline-0 border border-[#eee] w-full rounded-[3px] p-[10px] mt-[5px] placeholder:text-sm"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="mt-[15px] py-[10px] px-[15px] rounded-[3px] font-semibold text-[13px] bg-primary text-white capitalize w-full"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;

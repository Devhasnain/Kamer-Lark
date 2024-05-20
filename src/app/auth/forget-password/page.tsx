"use client";

import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

const ForgetPassword = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Link
        href={"/"}
        className="absolute top-3 border left-3 group shadow-lg px-3 py-1.5 gap-2 text-sm bg-white hover:bg-gray-50 hover:shadow-xl transition-all rounded-full flex flex-row items-center justify-center"
      >
        <RiArrowLeftLine
          color="black"
          size={16}
          className="group-hover:-translate-x-1 transition-all"
        />
        <span>Back</span>
      </Link>

      <div className="text-black w-4/12 mx-auto flex flex-col bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold">Forget Password</h2>
        <p className="text-sm mt-3 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          possimus. Amet nam earum minus, iure animi ex debitis pariatur ab?
        </p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={"border p-5 focus:outline-blue-500 text-black rounded-md"}
          containerStyle={"gap-2 text-black"}
          inputType="text"
          renderSeparator={<span>-</span>}
          shouldAutoFocus={true}
          renderInput={(props) => <input {...props} />}
        />

        <button
          type="submit"
          className="px-5 py-2 mt-7 text-white rounded bg-blue-500  self-start"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;

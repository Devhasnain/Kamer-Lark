"use client";

import React, { ChangeEvent, useState } from "react";
import {
  RiArrowLeftLine,
  RiEyeFill,
  RiEyeOffFill,
} from "@remixicon/react";
import Link from "next/link";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setForm((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-gray-100">
        <Link
          href={"/"}
          className="absolute top-3 border left-3 group shadow-lg px-3 py-1.5 gap-2 text-sm bg-white hover:bg-gray-50 hover:shadow-xl transition-all rounded-full flex flex-row items-center justify-center"
        >
          <RiArrowLeftLine color="black" size={16} className="group-hover:-translate-x-1 transition-all" />
          <span>Back</span>
        </Link>

        <div className="text-black w-full sm:w-8/12 lg:w-4/12 2xl:w-3/12 mx-auto flex flex-col bg-white p-8 rounded-md">
          <h2 className=" text-center text-2xl font-bold">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col mt-8 gap-5">
            <input
              type="text"
              required
              name="email"
              value={form.email}
              onChange={handleOnChange}
              className="w-full bg-gray-100 rounded-md px-4 py-2.5 outline-none text-black"
              placeholder="Email or Phone Number"
            />
            <div className="w-full bg-gray-100 rounded-md px-2 flex flex-row items-center gap-2 outline-none text-black">
              <input
                required
                name="password"
                value={form.password}
                onChange={handleOnChange}
                type={showPassword ? "text" : "password"}
                className="w-full bg-gray-100 rounded-md px-2 py-2.5 outline-none text-black"
                placeholder="Password"
              />
              {showPassword ? (
                <RiEyeOffFill
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-blue-500 cursor-pointer"
                />
              ) : (
                <RiEyeFill
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-blue-500 cursor-pointer"
                />
              )}
            </div>

            <button
              type="submit"
              className="px-5 py-2 text-white font-bold mt-4 rounded bg-blue-500 w-full"
            >
              Login
            </button>
          </form>

          <div className="flex flex-row justify-end my-2">
            <Link href={"/auth/forget-password"} className="text-red-500 cursor-pointer text-sm">
              Forget Password?
            </Link>
          </div>

          <div className="flex flex-row items-center mt-5">
            <div className="h-[1px] w-full bg-gray-500 rounded-full" />
            <p className="w-[30rem] text-md text-center">or login with</p>
            <div className="h-[1px] w-full bg-gray-500 rounded-full" />
          </div>

          <button className="rounded-md hover:bg-gray-100 transition-all w-full border p-2 flex flex-row items-center justify-center gap-5 mb-2 mt-4">
            <GoogleIcon height={25} width={25} />
            <span>Sign in with Google</span>
          </button>

          <button className="rounded-md hover:bg-gray-100 transition-all w-full border p-2 flex flex-row items-center justify-center gap-5 my-2">
            <FacebookIcon height={25} width={25} />
            <span>Sign in with Facebook</span>
          </button>

          <div className="text-sm flex my-4 flex-row items-center flex-wrap gap-1 justify-center">
            <span className="">Don’t have an account yet? </span>
            <Link href={"/auth/signup"} className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

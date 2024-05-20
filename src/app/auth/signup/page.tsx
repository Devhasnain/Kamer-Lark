"use client";

import React, { ChangeEvent, useState } from "react";
import { RiArrowLeftLine, RiEyeFill, RiEyeOffFill } from "@remixicon/react";
import Link from "next/link";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
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
      <div className="min-h-screen flex flex-col items-center justify-center relative bg-gray-100">
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

        <div className="text-black w-full sm:w-8/12 lg:w-4/12 2xl:w-3/12 mx-auto flex flex-col bg-white p-8 rounded-md">
          <h2 className=" text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col mt-8 gap-5">
            <input
              type="text"
              required
              minLength={3}
              name="first_name"
              value={form.first_name}
              onChange={handleOnChange}
              className="w-full bg-gray-100 rounded-md px-4 py-2.5 outline-none text-black"
              placeholder="First name"
            />

            <input
              type="text"
              required
              name="last_name"
              minLength={1}
              value={form.last_name}
              onChange={handleOnChange}
              className="w-full bg-gray-100 rounded-md px-4 py-2.5 outline-none text-black"
              placeholder="Last name"
            />

            <input
              type="email"
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
                minLength={6}
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

            <div className="w-full bg-gray-100 rounded-md px-2 flex flex-row items-center gap-2 outline-none text-black">
              <input
                required
                name="confirm_password"
                minLength={6}
                value={form.confirm_password}
                onChange={handleOnChange}
                type={`${showPassword ? "text" : "password"}`}
                className="w-full bg-gray-100 rounded-md px-2 py-2.5 outline-none text-black"
                placeholder="Confirm Password"
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
              Sign Up
            </button>
          </form>

          <div className="text-sm flex my-4 flex-row items-center gap-1 flex-wrap justify-center">
            <span className="">Already have an account yet? </span>
            <Link href={"/auth/signin"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

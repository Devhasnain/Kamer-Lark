import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

let Links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Listings",
    path: "/listings",
  },
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/auth/signin",
  },
  {
    title: "Sign Up",
    path: "/auth/signup",
  },
];

const SmallScreenMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RiMenu3Line
        color="white"
        className="cursor-pointer"
        size={32}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div
        className={`${
          open ? "w-[18rem] sm:w-[23rem] left-0" : "w-0 -left-40"
        } absolute top-0 block lg:hidden transition-all duration-300 h-screen shadow-2xl text-black bg-white rounded-tr-md rounded-br-md`}
      >
        <div className="px-5">
          <div className="flex flex-row items-center justify-between pb-5 pt-3">
            <Logo />
            <RiCloseLine
              className="cursor-pointer"
              color="black"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>

          <hr />

          <div className="pt-3 flex flex-col gap-3">
            {Links?.map((item, index) => {
              return (
                <Link className="px-4 bg-gray-100 py-2 rounded-md text-center hover:bg-gray-200 transition-all" href={item.path} key={index}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallScreenMenu;

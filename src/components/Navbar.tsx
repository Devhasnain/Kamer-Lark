"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginModel from "./Auth/LoginModel";

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
];

const Navbar = () => {
  let pathname = usePathname();

  return (
    <div className="fixed w-full z-50 bg-black text-white">
      <Container>
        <div className="grid grid-cols-12 items-center py-1.5">
          <div className="col-span-2">
            <Logo />
          </div>
          <div className="col-span-7 flex flex-row items-center justify-center gap-12">
            {Links?.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-[#C6AB7C]" : "text-white"
                  } hover:text-[#C6AB7C] transition-all`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="col-span-3 flex flex-row items-center justify-end gap-3">
            <Link href={"/"} className="px-5 py-2 rounded bg-blue-500">
              Add Listings
            </Link>
            <LoginModel />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

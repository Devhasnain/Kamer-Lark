"use client";

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiPinterestFill,
  RiSkypeFill,
  RiTwitterFill,
} from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

let socialIcons = [
  {
    icon: <RiTwitterFill color="white" />,
    link: "/",
  },
  {
    icon: <RiFacebookCircleFill color="white" />,
    link: "/",
  },
  {
    icon: <RiLinkedinFill color="white" />,
    link: "/",
  },
  {
    icon: <RiInstagramLine color="white" />,
    link: "/",
  },
  {
    icon: <RiPinterestFill color="white" />,
    link: "/",
  },
  {
    icon: <RiSkypeFill color="white" />,
    link: "/",
  },
];

let Quick_Links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    title: "Terms and Conditions",
    path: "/terms",
  },
];

let Address = [
  {
    icon: <RiMapPinLine size={22} />,
    title: "122, King street",
  },
  {
    icon: <RiPhoneLine size={22} />,
    title: "+1 (000) 000 00 000 ",
  },
  {
    icon: <RiMailLine size={22} />,
    title: "Support@kamerlark.net",
  },
];

const Footer = () => {
  let pathname = usePathname();
  return (
    <>
      <div className="bg-black text-white py-14 _footer">
        <Container>
          <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-2">
            <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-7">
              <div className="flex flex-col gap-5">
                <Logo />
                <p className="w-full sm:w-10/12 md:w-8/12 lg:w-8/12 xl:w-5/12">
                  KamerLark is an international accommodation platform designed
                  for students and family who are going to abroad and worrying
                  about accommodation.
                </p>
                <div className="flex flex-row items-center gap-3 flex-wrap">
                  {socialIcons?.map((item, index) => (
                    <Link
                      key={index}
                      className="p-1.5 rounded-md bg-blue-500"
                      href={item.link}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Quick Links</h3>
                <div className="rounded-md h-1 bg-blue-500 w-12" />
                <ul className="list-disc flex flex-col mt-2 gap-1 ml-4">
                  {Quick_Links?.map((item, index) => (
                    <li key={index}>
                      <Link
                        className={`text-sm ${
                          item.path === pathname
                            ? "text-[#3DB0FC]"
                            : "text-white"
                        } hover:text-[#3DB0FC] transition-all`}
                        href={item.path}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <div className="rounded-md h-1 bg-blue-500 w-12" />
                <div className="flex flex-col mt-2 gap-5">
                  {Address?.map((item, index) => (
                    <div
                      className="flex flex-row gap-3 items-center"
                      key={index}
                    >
                      {item.icon}
                      <span className="text-sm">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500 h-1 w-9/12 mt-20 mb-8 mx-auto rounded-md" />

          <p className="text-center">©2024 KamerLark -All rights reserved.</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;

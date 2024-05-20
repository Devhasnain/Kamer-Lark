"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Accordion from "@/components/ui/Accordion";
import Avatar from "@/components/ui/Avatar";
import ProductCard from "@/components/ui/ProductCard";
import React, { useState } from "react";

let faqs = [
  {
    title: "illo ratione fugit est quaerat? Repudiandae?",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum omnis tempora maxime odit, illo ratione fugit est quaerat? Repudiandae?",
  },
  {
    title: "illo ratione fugit est quaerat? Repudiandae?",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum omnis tempora maxime odit, illo ratione fugit est quaerat? Repudiandae?",
  },
  {
    title: "illo ratione fugit est quaerat? Repudiandae?",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum omnis tempora maxime odit, illo ratione fugit est quaerat? Repudiandae?",
  },
  {
    title: "illo ratione fugit est quaerat? Repudiandae?",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum omnis tempora maxime odit, illo ratione fugit est quaerat? Repudiandae?",
  },
  {
    title: "illo ratione fugit est quaerat? Repudiandae?",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum omnis tempora maxime odit, illo ratione fugit est quaerat? Repudiandae?",
  },
  {
    title: "illo ratione fugit est quaerat? Repudiandae?",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum omnis tempora maxime odit, illo ratione fugit est quaerat? Repudiandae?",
  },
];

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<any>(null);

  return (
    <>
      <Navbar />
      <Container>
        <div className="py-24">
          <div className="flex flex-col gap-3">
            <Avatar
              styles="h-32 w-32"
              badgeStyle=" right-2 top-2"
              badgeHeight={30}
              badgeWidth={30}
              isVerified={true}
            />
            <button className="self-start ml-4 text-sm px-3 text-white py-1.5 bg-blue-500 rounded-md transition-all hover:bg-blue-600 hover:shadow-lg shadow">
              Edit Profile
            </button>
          </div>

          <div className="bg-white shadow-xl w-7/12 p-8 px-[80px] my-8 rounded-md">
            <div className="flex justify-between mb-8">
              <p className="text-xl">Hilux Fokou</p>
              <p className="text-xl">+91 6976432142</p>
            </div>
            <p className="mb-8">
              Address: NH 207, Nagadenehalli Doddaballapur, taluk, Bengaluru,
              Karnataka 561203
            </p>
            <div className="flex justify-between">
              <p
                className="font-bold"
                style={{
                  background: "linear-gradient(to right, #F8C562, #9B62F8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                KamerLark Premium is active
              </p>
              <p>Expires 29-10-2024</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 my-14">
            {[0, 0, 0].map((item, index) => {
              return <ProductCard key={index} />;
            })}
          </div>

          <div className="flex flex-col gap-5 my-12">
            {faqs?.map((item, index) => {
              return (
                <Accordion
                  index={index}
                  key={index}
                  isOpen={isOpen}
                  setOpen={setIsOpen}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  item={item}
                />
              );
            })}
          </div>

          <button className="self-start text-sm px-4 text-white py-2 bg-blue-500 rounded-md transition-all hover:bg-blue-600 hover:shadow-lg shadow">
              Logout
            </button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;

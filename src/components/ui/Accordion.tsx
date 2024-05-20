import { RiArrowDownSLine } from "@remixicon/react";
import React from "react";

type Props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  activeIndex: any;
  setActiveIndex: (value: any) => void;
  item: {
    title: string;
    paragraph: string;
  };
  index: number;
};

const Accordion = ({
  isOpen,
  setOpen,
  activeIndex,
  setActiveIndex,
  item,
  index,
}: Props) => {
  return (
    <div className="p-5 bg-white transition-all rounded-md shadow-lg hover:shadow-2xl">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <RiArrowDownSLine
          className={`${
            isOpen && activeIndex === index ? "rotate-180" : ""
          } transition-all duration-300 cursor-pointer`}
          onClick={() => {
            setOpen(!isOpen);
            setActiveIndex(index);
          }}
        />
      </div>
      <div className={`${isOpen && activeIndex === index ? "pt-5" : ""}`}>
        {isOpen && activeIndex === index ? <p>{item.paragraph}</p> :<p>{item.paragraph?.slice(0,0)}</p>}
      </div>
    </div>
  );
};

export default Accordion;

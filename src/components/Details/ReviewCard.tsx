import React from "react";
import Avatar from "../ui/Avatar";
import { RiStarFill } from "@remixicon/react";

type Props = {
  review: string;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex flex-row gap-5 p-4 rounded-md shadow-md bg-[#A4B8FFA1]">
      <div className="">
        <Avatar />
      </div>
      <div className="">
        <p className="text-start text-sm">{review}</p>
        <div className="flex flex-row items-center gap-1 mt-3">

        {[0, 0, 0, 0, 0].map((item, index) => (
          <RiStarFill size={18} key={index} className="text-yellow-400"  />
        ))}
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;

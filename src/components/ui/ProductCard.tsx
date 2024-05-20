import {
  RiEyeFill,
  RiHotelBedFill,
  RiMapPinLine,
  RiPriceTag3Line,
  RiRestaurant2Line,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div className="shadow-lg hover:shadow-xl transition-all group overflow-hidden rounded-md bg-white">
      <div className="relative">
        <Image
          className="w-full h-full object-cover sm:w-auto group-hover:scale-[1.02] transition-all"
          height={300}
          width={400}
          alt=""
          src={"/assets/Image.png"}
        />

        <span className="absolute top-4 left-4 p-2 rounded-md text-xs text-white bg-blue-500">
          Verified
        </span>
        <div className="absolute top-4 right-4 p-2 rounded-md font-bold text-blue-500 flex flex-row items-center gap-2">
          <RiEyeFill />
          <span>2000</span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">3-bed Apartment I 67 sq.m</h3>
        <div className="flex text-sm flex-row items-center gap-2">
          <RiMapPinLine size={20} color="" />
          <span className="text-blue-500">New Market, Youndae</span>
        </div>
        <div className="flex text-sm flex-row items-center gap-2">
          <RiPriceTag3Line size={20} color="" />
          <span className="">100,000 FCFA - Annually</span>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-sm gap-2 flex flex-row items-center ">
            <span>{1}</span>
            <RiHotelBedFill size={18} />
          </div>
          <div className="text-sm gap-2 flex flex-row items-center ">
            <span>{1}</span>
            <RiHotelBedFill size={18} />
          </div>
          <div className="text-sm gap-2 flex flex-row items-center ">
            <span>{1}</span>
            <RiRestaurant2Line size={18} />
          </div>
        </div>

        <hr className="mx-8 mt-5 mb-2" />

        <Link
          href={"/detail"}
          className="text-sm text-white self-center bg-blue-500 rounded-md px-5 py-2"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

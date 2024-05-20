import React from "react";
import Container from "../Container";
import {
  RiFilter2Fill,
  RiSearchLine,
} from "@remixicon/react";
import ProductCard from "../ui/ProductCard";

const Section2 = () => {
  return (
    <>
      <Container>
        <div className="h-[40vh] flex items-center justify-center">
          <div className="flex flex-row w-full md:w-10/12 lg:w-7/12 mx-auto gap-2 md:gap-6">
            <div className="p-2 shadow-md bg-white w-full rounded-md flex flex-row">
              <input
                placeholder="Search by City, University or Property"
                className="w-full outline-none px-3"
              />
              <button className="bg-blue-500 rounded-md p-2.5">
                <RiSearchLine color="white" />
              </button>
            </div>
            <div className="flex flex-col justify-center">
              <button className="flex flex-row items-center gap-2 text-white px-3 bg-blue-500 rounded-md py-2.5">
                <RiFilter2Fill color="white" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-24">
          <div className="">
            <h2 className="text-3xl font-bold">Top Offers</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
              return <ProductCard key={index} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section2;

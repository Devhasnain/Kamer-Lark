import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CommunityCard from "@/components/ui/CommunityCard";
import { RiSearchLine } from "@remixicon/react";
import React from "react";

const Community = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col pt-24 pb-24">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-5/12 mx-auto pb-14">
            <div className="grid grid-cols-12 py-2 bg-[#A4B8FF] rounded-md shadow">
              <div className="col-span-10">
                <input
                  placeholder="Enter the location"
                  className="text-black w-full px-4 py-1.5 bg-transparent outline-none"
                />
              </div>
              <div className="col-span-2 border-l flex flex-row items-center justify-center">
                <RiSearchLine className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
              return <CommunityCard key={index} />;
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Community;

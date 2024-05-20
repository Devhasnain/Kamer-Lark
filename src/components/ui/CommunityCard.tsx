import { RiMapPinLine } from "@remixicon/react";
import React from "react";

export default function CommunityCard() {
  return (
    <div className="shadow-xl p-3 bg-white rounded-md hover:shadow-2xl transition-all">
      <div className="flex items-center">
        <div className="w-16 mr-1">
          <img className="rounded-full" src="/assets/avatar.png" />
        </div>
        <div>
          <p className="font-bold text-xl">Jon Doe</p>
          <p className="flex items-center">
            <RiMapPinLine />
            University of Yaounde
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-row items-center justify-between flex-wrap gap-y-5 sm:gap-y-0">
        <div className="flex flex-row items-center justify-between sm:justify-start w-full sm:w-auto gap-5">
          <button className="bg-[#62C2F8] text-white rounded p-1 px-4 font-bold">
            Connect
          </button>
          <button className="bg-[#62C2F8] text-white rounded p-1 px-4 font-bold">
            Chat
          </button>
        </div>

        <div className="flex flex-row justify-end">
          <button className="bg-[#62C2F8] text-white rounded p-1 px-4 font-bold">
            Send request
          </button>
        </div>
      </div>
    </div>
  );
}

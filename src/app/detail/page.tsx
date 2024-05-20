import Container from "@/components/Container";
import PhotoGallery from "@/components/Details/PhotoGallery";
import ReviewsCarousel from "@/components/Details/ReviewsCarousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Avatar from "@/components/ui/Avatar";
import {
  RiEyeLine,
  RiHotelBedLine,
  RiMapPinLine,
  RiRestaurant2Line,
  RiStarFill,
} from "@remixicon/react";
import Link from "next/link";
import React from "react";

let images = [
  "https://images.unsplash.com/photo-1555992457-b8fefdd09069?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const AccommodationDetail = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="pt-24 pb-14 flex flex-col gap-8">
          <div className="p-5 rounded-md bg-white">
            <div className="flex flex-row items-center justify-between">
              <div className=" flex flex-row items-center gap-3">
                <Link href={"/"} className="text-blue-500 text-sm">
                  United Kindom
                </Link>
                <span>/</span>
                <Link href={"/"} className="text-blue-500 text-sm">
                  England
                </Link>
              </div>
              <div className="flex flex-row items-center gap-8 text-sm">
                <button className="bg-transparent outline-none text-blue-500">
                  Share
                </button>
                <button className="bg-transparent outline-none text-blue-500">
                  Shortlist
                </button>
              </div>
            </div>

            <PhotoGallery photos={images} />

            <div className="flex flex-row items-center justify-between mt-4">
              <h1 className="text-3xl font-bold">Single Room</h1>
              <div className="flex flex-row items-center gap-2 text-sm">
                <RiEyeLine />
                <span>200</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm mt-1">
              <RiMapPinLine size={20} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                sequi!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0">
            <div className="col-span-8 bg-white rounded-md shadow-lg p-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold">What will you get</h2>
              <h3 className="text-lg font-semibold">Common Amenities</h3>

              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6 sm:col-span-3 flex flex-row items-center gap-2">
                  <RiHotelBedLine />
                  <span className="text-sm">1 Room</span>
                </div>
                <div className="col-span-6 sm:col-span-9 flex flex-row items-center gap-2">
                  <RiRestaurant2Line size={18} />
                  <span className="text-sm">1 Kitchen</span>
                </div>
                <div className="col-span-6 sm:col-span-3 flex flex-row items-center gap-2">
                  <RiHotelBedLine />
                  <span className="text-sm">1 Room</span>
                </div>
                <div className="col-span-6 sm:col-span-9 flex flex-row items-center gap-2">
                  <RiRestaurant2Line size={18} />
                  <span className="text-sm">1 Kitchen</span>
                </div>
              </div>
            </div>
            <div className="md:ml-5 col-span-4 bg-white rounded-md shadow-lg p-5 flex flex-col items-center justify-center gap-5">
              <div className="flex flex-row flex-wrap gap-3 justify-center">
                <button className="px-5 py-2 rounded-md bg-blue-500 shadow hover:bg-blue-600 transition-all text-white">
                  Book Now
                </button>
                <button className="px-5 py-2 rounded-md bg-green-500 shadow hover:bg-green-600 transition-all text-white">
                  Share
                </button>
              </div>

              <Link href={"/"} className="text-sm text-blue-500">
                View terms of Agreement
              </Link>
            </div>
          </div>

          <div className="md:w-8/12 p-5 bg-white rounded-md shadow-md">
            <h4 className="text-lg font-semibold">Posted By:</h4>
            <div className="flex flex-row items-center gap-3 my-3">
              <Avatar />
              <div className="flex flex-col">
                <span className="font-semibold">User Name</span>
                <span className="text-sm text-gray-500">+(237) 87895xxxxx</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-5">
              <button className="px-5 py-2 rounded-md bg-blue-500 shadow transition-all hover:bg-blue-600 text-white">
                Book Appointment
              </button>
              <button className="px-5 py-2 rounded-md bg-blue-500 shadow transition-all hover:bg-blue-600 text-white">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center gap-5">
            <h3 className="text-xl font-bold">Reviews (120)</h3>
            <div className="flex flex-row">
              {[0, 0, 0, 0, 0].map((_, index) => (
                <RiStarFill color="yellow" size={20} key={index} />
              ))}
            </div>
          </div>

          <ReviewsCarousel />

          <button className="bg-gradient-to-b from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-all px-5 text-white py-2 rounded-lg shadow hover:shadow-lg mt-4 self-center">
            Join Student Community
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AccommodationDetail;

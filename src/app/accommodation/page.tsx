"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import { RiAddLine } from "@remixicon/react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const Accommodation = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    rooms: "",
    bathrooms: "",
    location: "",
    precise_location: "",
    google_location: "",
    price: "",
    payment_term: "",
    others: "",
  });

  const [images, setImages] = useState<any>(null);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;
    setForm((pre) => ({ ...pre, [name]: value }));
  };

  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      setImages(e.target.files);
    }
  };

  return (
    <>
      <Navbar />
      <PageHeader title="Accommodation" />
      <Container>
        <div className="w-full lg:w-10/12 mx-auto py-24 flex flex-col gap-2">
          <form className="shadow-lg rounded-md bg-white px-[8rem] py-12 mx-[5rem] flex flex-col gap-4">
            <label className="" htmlFor="name">
              <span className="text-sm text-gray-500 mt-2">Name</span>
              <input
                required
                minLength={3}
                id="name"
                name="name"
                onChange={handleOnChange}
                value={form.name}
                placeholder="Name"
                className="w-full px-3 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
              />
            </label>

            <label className="" htmlFor="type">
              <span className="text-sm text-gray-500 mt-2">
                Types of Accommodation
              </span>
              <select
                id="type"
                name="type"
                onChange={handleOnChange}
                value={form.type}
                required
                className="w-full px-2 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
              >
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                <option>Type 4</option>
                <option>Type 5</option>
              </select>
            </label>

            <label className="" htmlFor="rooms">
              <span className="text-sm text-gray-500 mt-2">
                Number of rooms
              </span>
              <select
                id="rooms"
                required
                name="rooms"
                value={form.rooms}
                onChange={handleOnChange}
                className="w-full px-2 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>

            <label className="" htmlFor="bathrooms">
              <span className="text-sm text-gray-500 mt-2">Bathrooms</span>
              <select
                id="bathrooms"
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleOnChange}
                required
                className="w-full px-2 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>

            <label className="" htmlFor="location">
              <span className="text-sm text-gray-500 mt-2">Location</span>
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={handleOnChange}
                required
                className="w-full px-3 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
                placeholder="Location"
              />
            </label>

            <label className="" htmlFor="precise_location">
              <span className="text-sm text-gray-500 mt-2">
                Precise Location
              </span>
              <input
                id="precise_location"
                name="precise_location"
                onChange={handleOnChange}
                required
                value={form.precise_location}
                className="w-full px-3 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
                placeholder="Precise Location"
              />
            </label>

            <label className="" htmlFor="google_location">
              <span className="text-sm text-gray-500 mt-2">
                Pin Google Map Location
              </span>
              <input
                id="google_location"
                name="google_location"
                value={form.google_location}
                onChange={handleOnChange}
                required
                className="w-full px-3 py-2 bg-gray-100 rounded-md shadow outline-none text-black"
                placeholder="Precise Location"
              />
            </label>

            <div className="">
              <span className="text-sm text-gray-500 mt-2">Add Pictures</span>

              <div className="grid grid-cols-4">
                {images?.length
                  ? images?.map((item: any, index: number) => {
                      console.log(item);
                      return (
                        <div
                          id="images"
                          key={index}
                          className="h-32 w-32 rounded-md bg-gray-200 flex flex-col items-center justify-center"
                        >
                          <Image
                            alt=""
                            src={URL.createObjectURL(item)}
                            height={100}
                            width={100}
                          />
                        </div>
                      );
                    })
                  : ""}

                <label htmlFor="images" className="mt-1 cursor-pointer">
                  <input
                    type="file"
                    placeholder="Name"
                    id="images"
                    multiple
                    maxLength={6}
                    minLength={1}
                    className="hidden"
                    onChange={handleImages}
                  />
                  <div
                    id="images"
                    className="h-32 w-32 rounded-md bg-gray-200 flex flex-col items-center justify-center"
                  >
                    <RiAddLine size={50} />
                  </div>
                </label>
              </div>
            </div>

            <button className="px-5 py-2 bg-blue-500 rounded-md shadow hover:bg-blue-600 text-white self-center mt-8">
              Submit
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Accommodation;

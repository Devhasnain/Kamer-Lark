"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import React, { ChangeEvent, useState } from "react";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    date: "",
    time: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    setForm((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <PageHeader title="Book Your Appointment" />
      <Container>
        <div className="w-full lg:w-10/12 mx-auto py-24 flex flex-col gap-2">
          <form className="shadow-lg rounded-md bg-white px-[8rem] py-12 mx-[5rem] flex flex-col gap-5">
            <label htmlFor="name">
              <span className="text-sm mb-1 text-gray-500">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleOnChange}
                minLength={3}
                type="text"
                placeholder="Write your full name"
                className="bg-gray-200 rounded-md w-full outline-none px-3 py-2 shadow text-black"
              />
            </label>
            <label htmlFor="email">
              <span className="text-sm mb-1 text-gray-500">
                Email or Phone Number
              </span>
              <input
                type="text"
                required
                name="email"
                value={form.email}
                onChange={handleOnChange}
                placeholder="Write your Email or Phone Number"
                className="bg-gray-200 rounded-md w-full outline-none px-3 py-2 shadow text-black"
              />
            </label>

            <label htmlFor="address">
              <span className="text-sm mb-1 text-gray-500">Address</span>
              <textarea
                required
                name="address"
                value={form.address}
                onChange={handleOnChange}
                minLength={10}
                rows={8}
                placeholder="Write your Address here"
                className="bg-gray-200 rounded-md w-full outline-none px-3 py-2 shadow text-black"
              />
            </label>

            <label htmlFor="date">
              <span className="text-sm mb-1 text-gray-500">Date</span>
              <input
                type="date"
                required
                name="date"
                value={form.date}
                onChange={handleOnChange}
                placeholder="Select the date"
                className="bg-gray-200 rounded-md w-full outline-none px-3 py-2 shadow text-black"
              />
            </label>

            <label htmlFor="time">
              <span className="text-sm mb-1 text-gray-500">Time</span>
              <input
                type="time"
                required
                name="time"
                value={form.time}
                onChange={handleOnChange}
                placeholder="Select the time"
                className="bg-gray-200 rounded-md w-full outline-none px-3 py-2 shadow text-black"
              />
            </label>

            <button className="px-5 py-2 text-white font-bold mt-4 rounded bg-blue-500 self-center">
              Submit
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Appointment;

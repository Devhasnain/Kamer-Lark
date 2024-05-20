'use client'

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import React, { useState } from "react";

const Accommodation = () => {
    const [form,setForm] = useState({
        name:"",
        type:"",
        rooms:"",
        bathrooms:"",
        location:"",
        precise_location:"",
        google_location:"",
        price:"",
        payment_term:"",
        others:"",
    })
  return (
    <>
      <Navbar />
      <PageHeader title="Accommodation" />
      <Container>
        <div className="w-full lg:w-10/12 mx-auto py-24 flex flex-col gap-2">
          <form className="shadow-lg rounded-md bg-white px-[8rem] py-12 mx-[5rem] flex flex-col gap-5"></form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Accommodation;

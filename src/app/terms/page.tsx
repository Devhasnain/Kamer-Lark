import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import React from "react";

let terms = [
  "Payment: Rent is due on the 1st of every month, and late fees will be applied if payment is not received by the 5th of the month.",
  "Occupancy: Only the person(s) listed on the lease agreement are allowed to reside in the rental unit.",
  "Quiet Hours: Tenants are expected to be respectful of their neighbors and keep noise levels to a minimum between the hours of 10 PM and 8 AM.",
  "Maintenance: Tenants are responsible for keeping the rental unit clean and in good condition. Any damages caused by the tenant will be their responsibility to repair or replace.",
  "Smoking: Smoking is not allowed inside the rental unit or on the property.",
  "Pets: Pets are not allowed without prior written consent from the landlord.",
  "Subletting: Tenants are not allowed to sublet the rental unit without prior written consent from the landlord.",
  "Termination: Either the landlord or tenant may terminate the lease agreement by providing written notice 30 days in advance.",
  "Security deposit: A security deposit of $500 is required at the time of signing the lease agreement. The deposit will be refunded at the end of the lease term if the rental unit is returned in the same condition as when the tenant moved in.",
  "Governing law: This lease agreement shall be governed by and construed in accordance with the laws of the state of Cameroon",
];

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="Terms and Conditions" />
      <Container>
        <div className="w-full lg:w-10/12 mx-auto py-24 flex flex-col gap-2">
          {terms?.map((item, index) => (
            <p key={index}>
              {index + 1}. {item}
            </p>
          ))}
          <div className="flex flex-row justify-end pt-16">
            <Image
              alt=""
              src={"/assets/signature.png"}
              height={130}
              width={130}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

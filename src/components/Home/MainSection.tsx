import React from "react";
import Container from "../Container";

const MainSection = () => {
  return (
    <div className="_home_main_section pt-14">
      <Container>
        <div className="text-white gap-10 h-screen items-center justify-center flex flex-col w-8/12 mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold">Christmas Sale is Here 🎄</h1>
          <p className="lg:text-lg">
            50% off on all Room Bookings. Book now to avail the offer.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MainSection;

import React from "react";
import Container from "../Container";

type Props = {
    title:string
}

const PageHeader = ({title}:Props) => {
  return (
    <div className="bg-[#A4B8FF] h-[70vh]">
      <Container>
        <div className="text-black gap-10 h-[70vh] items-center justify-center flex flex-col w-8/12 mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;

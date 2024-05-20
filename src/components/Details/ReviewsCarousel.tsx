"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";

export default function ReviewsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        navigation={false}
        modules={[Navigation, HashNavigation]}
        className="mySwiper"
        breakpoints={{
          750: {
            slidesPerView: 1,
          },
        }}
      >
        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => {
          let review =
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident corrupti porro sit assumenda adipisci maiores a ducimus sapiente veniam!";
          return (
            <SwiperSlide data-hash={index} key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

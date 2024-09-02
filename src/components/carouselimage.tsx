"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "../styles/swiper-custom.css";

import ImageOverlay from "./imageoverlay";

function CarouselImage({ data }: { data: servicesData[] }) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={5}
        slidesPerView={1}
        speed={600}
        breakpoints={{
          768: {
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <ImageOverlay item={item} key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CarouselImage;

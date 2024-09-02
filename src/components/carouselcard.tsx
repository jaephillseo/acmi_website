'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/swiper-custom.css';

import Card from './card';

function CarouselCard({ data }: { data: cardData[]; }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1.3}
        speed={800}
        breakpoints={{
          200: {
            spaceBetween: 0,
            slidesPerView: 1.3,
          },
          350: {
            spaceBetween: 10,
            slidesPerView: 1.3,
          },
          768: {
            spaceBetween: 30,
            slidesPerView: 1.3,
          }
        }}
        coverflowEffect={{
          "rotate": 50,
          "stretch": 0,
          "depth": 100,
          "modifier": 1,
          "slideShadows": true
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Card data={item} key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CarouselCard
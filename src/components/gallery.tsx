'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

const Gallery = ({ content }: { content: string[] }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {content.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={item} alt={item} key={index}></img>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default Gallery

'use client'
import React from 'react';
import Image from 'next/image';
import '../styles/carouselhero.css';
// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarouselHero = ({ contentImage }: { contentImage: string[] }) => {

  return (
    <div className='relative w-full h-screen'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className='absolute inset-0 w-full h-full z-10'
      >
        {contentImage.map((item: string, index: number) => (
          <SwiperSlide key={index} className='relative w-full h-full'>
            <Image 
              src={item}
              alt={`Slide ${index + 1}`}
              layout='fill'
              objectFit='cover'
              quality={80}
              className='swiper-slide-image'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-20'></div>

      {/* Centered Text */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white z-30 px-4 md:px-8 lg:px-12'>
        <h1 className="text-5xl text-base-200 md:text-7xl lg:text-8xl font-extrabold mb-6">Anugrah Cipta Mould Indonesia</h1>
        <h2 className="text-2xl text-base-200 md:text-4xl lg:text-5xl font-semibold mb-6">Shaping the Future of Mold Production</h2>
        <h3 className="text-xl text-base-200 md:text-2xl lg:text-3xl font-semibold mb-6">Since 1995</h3>
        
        {/* Optional Call to Action */}
        <a href="#about-us" className="mt-8 px-6 py-3 bg-white text-black rounded-full text-lg md:text-xl lg:text-2xl font-semibold hover:bg-gray-300 transition-all duration-300">
          Discover More
        </a>
      </div>
    </div>
  );
};

export default CarouselHero;


'use client';

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Typed from 'typed.js'; 
import '../styles/carouselhero.css'
// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarouselHero = ({ contentImage }: { contentImage: string[] }) => {

  const typedTarget = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: ["Dedicated to Excellence, Sustainability, and Innovation: Pioneering the Future of Footwear Components Worldwide"],
      typeSpeed: 35,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='min-w-full h-fit relative'>
        <div className='absolute z-30 w-full h-full flex justify-center text-center'>
          <div className="hero min-w-full overflow-hidden">
            <div className="hero-overlay bg-opacity-50">
            </div>
            <div className="hero-content text-center text-neutral-content px-4 md:px-8 lg:px-12 sm:pt-20">
              <div className="max-w-prose flex flex-col items-center space-y-3">
                <h1 className="mb-0 md:mb-5 lg:mb-8 text-3xl md:text-5xl lg:text-8xl font-bold">Quality Footwear Components</h1>
                <h2 className="mb-0 md:mb-3 lg:mb-5 text-lg md:text-3xl lg:text-5xl font-bold">Your Global Partner in Excellence</h2>
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-32 lg:w-64 h-1 my-1 md:my-4 bg-yellow-300 border-0 rounded" />
                </div>
                <div className="typed-container">
                  <p ref={typedTarget} className="text-sm md:mt-3 lg:mt-5 md:text-xl lg:text-2xl italic"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          className='md:mt-0 w-full h-[55vh] md:h-[55vh] lg:h-full'
        >
          {contentImage.map((item: string, index: number) => (
            <SwiperSlide key={index}>
              <Image src={item}
                alt={item}
                fill={true}
                key={index}
                // priority={index === 0}
              />
              <img src={item} alt={item} className='fullImage ' style={{ objectFit: 'cover' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CarouselHero

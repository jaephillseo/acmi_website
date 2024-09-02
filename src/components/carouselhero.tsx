
'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js'; 
import '../styles/carouselhero.css';
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
    if (typedTarget.current) {
      const typed = new Typed(typedTarget.current, {
        strings: [
          "Precision in Every Mold",
          "Innovation Driving Excellence",
          "Crafting the Future of Footwear"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

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
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-20'></div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 lg:px-12 z-30'>
        <h7 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4">Anugrah Cipta Mould Indonesia</h7>
        <h className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">Leading the World Mold Manufacturing</h>
        {/* <p ref={typedTarget} className="text-lg md:text-2xl lg:text-3xl font-light italic"></p> */}
      </div>
      {/* <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 lg:px-12 z-30'>
        <p ref={typedTarget} className="text-lg md:text-2xl lg:text-3xl font-light italic z-30 pt-80"></p>
      </div> */}
      
    </div>
  );
};

export default CarouselHero;
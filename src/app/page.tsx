

'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CarouselHero from '@/components/carouselhero';
import '../styles/buttons.css';
import SectionHeader from '@/components/sectionheader';
// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import { techCardData } from '@/data/techCardData';
import { CalendarIcon, CubeIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/solid';
import { LightBulbIcon, HandIcon, StarIcon } from '@heroicons/react/solid';

const bounceAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, type: "spring", stiffness: 120 },
  }),
};
interface CoreValue {
  title: string;
  color: string;
  description: string;
}
const Home = () => {
  const carouselImages: string[] = [
    "/images/factory-photo/DJI_0015e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
  ];

  const showcaseImages: string[] = [
    "/images/factory-materials/biocompound.jpg",
    "/images/factory-materials/eva_pellet.jpg",
    "/images/factory-materials/oyster.jpg",

  ];

  const partnerLogos: string[] = [
    "/images/factory-photo/DJI_0015e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0015e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",

  ];


  return (
    <>
      {/* Hero Section */}
      <CarouselHero contentImage={carouselImages} />


      <div className="flex flex-col items-center justify-center text-gray-700 mt-10 md:mt-14 lg:mt-15 px-5">
        {/* Title Section */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mt-4 mb-6">
          Your Trusted Partner in Advanced Mold Solutions
        </h2>

        {/* Detailed Description */}
        <div className="max-w-3xl text-left">
          <p className="text-sm md:text-base lg:text-lg mb-10">
            With over 25 years of expertise, we lead the industry in delivering high-performance molds that drive innovation and efficiency. From initial design to production, we focus on quality, precision, and sustainability, ensuring that our solutions are built to last.
            Explore our journey and discover how we are shaping the future of mold manufacturing for global brands across the footwear, sportswear, automotive, and other industrial sectors.
          </p>
          
        </div>

        {/* 4-column Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <CalendarIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Started Since</h3>
            <p className="text-lg">1995</p>
            <p className="text-sm text-gray-500">Over 25 years of innovation in mold making solutions.</p>
          </div>

          <div className="text-center">
            <CubeIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Yearly Mold Production Capacity</h3>
            <p className="text-lg">20,000 Sets</p>
            <p className="text-sm text-gray-500">State-of-the-art facilities for global production demands.</p>
          </div>

          <div className="text-center">
            <GlobeAltIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Countries Served</h3>
            <p className="text-lg">15+ Countries</p>
            <p className="text-sm text-gray-500">Providing solutions to leading brands worldwide.</p>
          </div>

          <div className="text-center">
            <UserGroupIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Employees</h3>
            <p className="text-lg">500+ Employees</p>
            <p className="text-sm text-gray-500">A dedicated workforce ensuring top-tier quality and service.</p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
            <Link href="/about" className="btn btn-primary">
              Discover Our Journey
            </Link>
          </div>


        <SectionHeader text="Products and Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          {techCardData.map((card, index) => (
            <motion.div
              key={index}
              className="card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 w-72"
              whileHover={{ scale: 1.02 }}
            >
              {/* Card Image */}
              <figure className="relative h-54 overflow-hidden">
                <motion.img
                  src={card.imgSrc}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </figure>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <div className="text-right">
                  <Link href={card.link} className="inline-block px-6 py-2 text-sm text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300">View More</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionHeader text="Partners" />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {partnerLogos.map((image, index) => (
            <div key={index} className="w-40 h-40 p-4 flex items-center justify-center">
              <Image
                src={image}
                alt={`Showcase $(index +1})`}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          ))}

        </div>
        {/* Contact Us Section */}
        {/* <SectionHeader text="------------------" />
        <p className="text-sm md:text-base lg:text-lg mt-4 mb-10 text-left">
          Ready to collaborate? Let's start a conversation and explore possibilities together.
        </p>
        <div className="flex justify-center mt-4 mb-6">
          <Link href="/contact-us" className="btn btn-primary">
            Get in Touch
          </Link>
        </div> */}
      </div>
    </>

  );

};
export default Home;
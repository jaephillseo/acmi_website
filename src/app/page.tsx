

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
    "/images/factory-photo/DJI_0011e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",

  ];
  const coreValues: CoreValue[] = [
    {
      title: "Innovation",
      color: "#f97316", // Orange
      description: "We are constantly pushing the boundaries of mold-making technology.",
    },
    {
      title: "Collaboration",
      color: "#f43f5e", // Red
      description: "Our success is driven by working together with our partners and customers.",
    },
    {
      title: "Sustainability",
      color: "#2563eb", // Blue
      description: "We strive for environmentally friendly manufacturing practices.",
    },
    {
      title: "Quality",
      color: "#4ade80", // Green
      description: "Ensuring the highest quality in every mold we produce.",
    },
  ];




  return (
    <>
      {/* Hero Section */}
      <CarouselHero contentImage={carouselImages} />
      <div className="flex flex-col items-center justify-center text-gray-700 mt-10 md:mt-14 lg:mt-20 px-5">

        {/* About Us Section */}
        <SectionHeader text="About Us" />

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-left mt-4 mb-6">
          Innovating Mold Making Solutions
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-10 text-left">
          We are at the forefront of technology, delivering high-quality molds for the footwear industry. Learn more about our journey, mission, and the values that drive us.
        </p>
        <div className="flex justify-center mb-12">
          <Link href="/about" className="btn btn-primary">
            Learn More About Us
          </Link>
        </div>
        {/* 4-column Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <CalendarIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Started Since</h3>
            <p className="text-lg">1980</p>
          </div>
          <div className="text-center">
            <CubeIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Yearly Mold Production Capacity</h3>
            <p className="text-lg">500,000 Units</p>
          </div>

          <div className="text-center">
            <GlobeAltIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Countries Served</h3>
            <p className="text-lg">20+ Countries</p>
          </div>
          <div className="text-center">
            <UserGroupIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
            <h3 className="text-xl font-bold">Employees</h3>
            <p className="text-lg">300+ Employees</p>
          </div>
        </div>


        <SectionHeader text="Our Core Values" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-left mt-4 mb-6">
          Our core values
        </h2>
        <div className="pie-chart-container">
          {/* Section 1 */}
          <div className="pie-chart-item" style={{ transform: 'rotate(0deg)' }}>
            <div className="pie-content">
              <i className="pie-icon fas fa-lightbulb"></i>
              <span>Innovation</span>
            </div>
          </div>

          {/* Section 2 */}
          <div className="pie-chart-item" style={{ transform: 'rotate(90deg)' }}>
            <div className="pie-content">
              <i className="pie-icon fas fa-hands-helping"></i>
              <span>Collaboration</span>
            </div>
          </div>

          {/* Section 3 */}
          <div className="pie-chart-item" style={{ transform: 'rotate(180deg)' }}>
            <div className="pie-content">
              <i className="pie-icon fas fa-globe"></i>
              <span>Sustainability</span>
            </div>
          </div>

          {/* Section 4 */}
          <div className="pie-chart-item" style={{ transform: 'rotate(270deg)' }}>
            <div className="pie-content">
              <i className="pie-icon fas fa-star"></i>
              <span>Quality</span>
            </div>
          </div>
        </div>

        {/* SLM Center Section */}
        



        <SectionHeader text="Technology and Machineries" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-5">
          {techCardData.map((card, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
              <figure className="h-48 overflow-hidden">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={card.link} className="btn btn-outline btn-primary">View More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionHeader text="ACMI Additive Manufacturing Center" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Scrollable Image */}
          <div className=" w-full flex justify-center items-center mt-5">
            <Image
              src="/images/slm1.png"
              alt="SLM Machine"
              width={600}
              height={900}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          {/* Right: Text Box */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Innovation in Mold Making</h3>
            <p className="text-sm md:text-base lg:text-lg">
              We inaugarated the first SLM technology in Indonesia.
            </p>
          </div>
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
        <SectionHeader text="------------------" />
        <p className="text-sm md:text-base lg:text-lg mt-4 mb-10 text-left">
          Ready to collaborate? Let's start a conversation and explore possibilities together.
        </p>
        <div className="flex justify-center mt-4 mb-6">
          <Link href="/contact-us" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </>

  );

};
export default Home;
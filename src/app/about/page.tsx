// 'use client'
// import React, { useEffect, useRef } from "react";
// import CardTextIcon from "@/components/cardtexticon";
// import TimelineItem from "@/components/timelineItem";
// import timelineData from "../../../constants/timelineConstants";
// import { motion } from "framer-motion";

// import "../../styles/typed-custom.css";
// import "../../styles/card.css";

// const AboutUs = () => {

//   return (
//     <>
//       <div
//         className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/design1.jpg)",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="absolute inset-0 z-10">
//           {/* <div className="w-full h-full flex justify-center items-center animate-pulse">
//             <svg
//               className="w-20 h-20 text-yellow-500 opacity-50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M12 2a1 1 0 011 1v18a1 1 0 01-2 0V3a1 1 0 011-1zM4.928 7.07a1 1 0 011.415 0l12.727 12.728a1 1 0 01-1.414 1.414L4.929 8.485a1 1 0 010-1.414z"
//                 fill="currentColor"
//               />
//             </svg>
//           </div> */}
//         </div>
//         <div className="hero-overlay bg-opacity-60 z-20"></div>
//         <div className="hero-content text-left text-neutral-content z-30">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-3xl text-base-300 md:text-5xl lg:text-7xl font-bold tracking-wider">
//               About Us
//             </h1>
//             <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide">
//               Discover our journey and our values
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
//         {/* Left Side Image */}
//         <motion.div
//           className="lg:w-1/2 w-full"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="/images/stock/design1.jpg"
//             alt="Mission Image"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </motion.div>

//         {/* Right Side Content */}
//         <motion.div
//           className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
//             Mission
//             <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
//               Our Mission
//             </span>
//           </h2>
//           <blockquote className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
//             <p>
//               At the core of our mission is a commitment to excellence, innovation, and sustainability in mold manufacturing. We aim to lead the industry by providing high-quality, precision molds that empower our clients to shape their visions with confidence. Our focus on continuous improvement and embracing new technologies enables us to deliver unmatched quality and performance.
//             </p>
//             <p className="mt-4">
//               We believe in building lasting partnerships through trust, integrity, and superior service. As we look to the future, our goal remains steadfast: to set new standards in mold production that support a more sustainable and efficient manufacturing ecosystem.
//             </p>
//           </blockquote>
//         </motion.div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
//         {/* Left Side Image */}


//         {/* Right Side Content */}
//         <motion.div
//           className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
//             Vision
//             <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
//               Our Vision
//             </span>
//           </h2>
//           <blockquote className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
//             <br />
//             <motion.ul
//               className="list-disc ml-8"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//             >
//               <li>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.
//                 Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet. Ut sem enim, ornare in tortor et, varius euismod sapien.
//                 Suspendisse ornare, velit non dapibus ornare, lectus nibh blandit mi, fringilla porttitor tellus tortor eu felis.
//               </li>
//             </motion.ul>
//           </blockquote>
//         </motion.div>
//         <motion.div
//           className="lg:w-1/2 w-full"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="/images/stock/design1.jpg"
//             alt="Vision Image"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </motion.div>
//       </div>
//       {/* <div className="flex text-justify justify-center bg-auto my-12 lg:my-24">
//         <div className="max w-5xl px-5">
//           <div className="flex justify-center text-center">
//             <div>
//               <h2 className="text-3xl lg:text-5xl font-bold text-center underline underline-offset-4 decoration-custom-blue decoration-2 mb-5">Key Milestones</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis. 
//                 Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet. Ut sem enim, ornare in tortor et, varius euismod sapien. 
//                 Suspendisse ornare, velit non dapibus ornare, lectus nibh blandit mi, fringilla porttitor tellus tortor eu felis.</p>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
//         {/* Left Side Content */}
//         <motion.div
//           className="lg:w-1/2 w-full"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="/images/stock/stockimage1.jpg"
//             alt="Production Capacity Image"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </motion.div>
//         <motion.div
//           className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
//             Production Capacity
//             <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
//               Capacity
//             </span>
//           </h2>
//           <p className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.
//           </p>
//           <ul className="list-disc ml-8 mt-4 text-lg md:text-xl lg:text-2xl font-light">
//             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
//             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
//             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
//             <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
//           </ul>
//         </motion.div>

//         {/* Right Side Image */}

//       </div>
//       {/* <section className="py-16 bg-gray-50">
//         <h2 className="text-3xl md:text-4xl font-bold text-custom-blue text-center mb-12">Our Key Milestones</h2>

//         <div className="relative">
//           <div className="hidden md:block absolute w-1 bg-custom-blue top-0 left-1/2 transform -translate-x-1/2 h-full"></div>

//           {timelineData.map((item, index) => (
//             <TimelineItem
//               key={index}
//               year={item.year}
//               title={item.title}
//               description={item.description}
//               isRightAligned={index % 2 !== 0} // Alternate left and right alignment
//             />
//           ))}
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default AboutUs;
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with better overlay and animations */}
      <section className="relative h-[24rem] md:h-[36rem] lg:h-[36rem]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/images/stock/design1.jpg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light">
                Discover our journey and our values
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Mission Section - Enhanced with better spacing and animations */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <img
                src="/images/stock/design1.jpg"
                alt="Mission"
                className="rounded-2xl shadow-xl object-cover w-full aspect-square"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="relative">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                  Mission
                </h2>
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-7xl text-gray-100 -z-10">
                  Our Mission
                </span>
              </div>
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                <p>
                  At the core of our mission is a commitment to excellence, innovation, and sustainability in mold manufacturing. We aim to lead the industry by providing high-quality, precision molds that empower our clients to shape their visions with confidence.
                </p>
                <p className="mt-4">
                  We believe in building lasting partnerships through trust, integrity, and superior service. As we look to the future, our goal remains steadfast: to set new standards in mold production that support a more sustainable and efficient manufacturing ecosystem.
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section - Enhanced with modern layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="relative">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                  Vision
                </h2>
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-7xl text-gray-100 -z-10">
                  Our Vision
                </span>
              </div>
              <ul className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium space-y-4 list-disc ml-6">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.
                  Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <img
                src="/images/stock/design1.jpg"
                alt="Vision"
                className="rounded-2xl shadow-xl object-cover w-full aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Capacity Section - Enhanced with modern cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:w-1/2 space-y-6 mb-16"
          >
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Production Capacity
              </h2>
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-7xl text-gray-100 -z-10">
                Capacity
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <img
                src="/images/stock/stockimage1.jpg"
                alt="Production Capacity"
                className="rounded-2xl shadow-xl object-cover w-full aspect-square"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 space-y-6"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.
              </p>
              <ul className="space-y-4 text-lg md:text-xl font-light text-gray-600 list-disc ml-6">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
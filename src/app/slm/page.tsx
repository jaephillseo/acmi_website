// 'use client'
// import React, { useEffect, useRef } from "react";
// import CardTextIcon from "@/components/cardtexticon";
// import TimelineItem from "@/components/timelineItem";
// import timelineData from "../../../constants/timelineConstants";
// import { motion } from "framer-motion";

// import "../../styles/typed-custom.css";
// import "../../styles/card.css";

// const AboutSlm = () => {

//   return (
//     <>
//       <div
//         className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/slmstockimage.jpg)",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60 z-20"></div>
//         <div className="hero-content text-left text-neutral-content z-30">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-3xl text-base-300 md:text-5xl lg:text-7xl font-bold tracking-wider">
//               SLM
//             </h1>
//             <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide">
              
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
//               <li>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis. 
//                 Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet. Ut sem enim, ornare in tortor et, varius euismod sapien. 
//                 Suspendisse ornare, velit non dapibus ornare, lectus nibh blandit mi, fringilla porttitor tellus tortor eu felis.
//               </li>
              
//             </motion.ul>
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

//     </>
//   );
// };

// export default AboutSlm;

'use client'
import React from "react";
import { motion } from "framer-motion";

const AboutSlm = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/slmstockimage.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay bg-opacity-60 z-20"></div>
        <div className="hero-content text-left text-neutral-content z-30">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-base-300 mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
              Selective Laser Melting (SLM)
            </h1>
            <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
              Harnessing advanced technology for high-precision mold production.
            </p>
          </div>
        </div>
      </div>

      {/* What is SLM Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
        <motion.div
          className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
            What is SLM?
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
              SLM Technology
            </span>
          </h2>
          <p className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
            Selective Laser Melting (SLM) is an advanced 3D printing technique that uses a high-power-density laser to melt and fuse metallic powders. It is renowned for producing high-precision, high-strength parts directly from CAD models, making it perfect for producing molds with complex geometries and high tolerances.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/stock/design1.jpg"
            alt="SLM Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* Production Capacity Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
        <motion.div
          className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
            Our SLM Production Capacity
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
              Capacity
            </span>
          </h2>
          <p className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
            We currently operate several SLM machines, allowing us to produce high-precision molds at a rapid rate. Our production capacity includes:
          </p>
          <ul className="list-disc ml-8 mt-4 text-lg md:text-xl lg:text-2xl font-light">
            <li>3 state-of-the-art SLM machines</li>
            <li>Capability to produce up to 500 molds per month</li>
            <li>High precision molds for complex designs</li>
            <li>Material options: stainless steel, titanium, aluminum</li>
          </ul>
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/stock/design1.jpg"
            alt="SLM Production Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
              Our casting molds are used in various industries and applications, providing reliable performance across different manufacturing environments.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Automotive</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra ipsum in urna cursus, ac vestibulum libero fringilla.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Aerospace</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam ipsum ut est vehicula, ut pharetra dui vestibulum.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Industrial Machinery</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, odio ut fermentum venenatis, metus erat condimentum nulla.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our End Goal Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
      <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/stock/design1.jpg"
            alt="Future of SLM"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
        
        <motion.div
          className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
            Our End Goal with SLM
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
              Future Vision
            </span>
          </h2>
          <p className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
            Our long-term vision is to fully integrate SLM technology into our manufacturing processes, allowing for:
          </p>
          <ul className="list-disc ml-8 mt-4 text-lg md:text-xl lg:text-2xl font-light">
            <li>Complete automation of mold production</li>
            <li>Reduction in production time by 30%</li>
            <li>Customization at scale with minimal lead time</li>
            <li>Advanced material utilization for stronger, more durable molds</li>
          </ul>
        </motion.div>
       
      </div>

      {/* Modern Gallery Section */}
      <div className="flex flex-col items-center bg-auto my-12 lg:my-24">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">
          Product Gallery
        </h2>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            className="rounded-lg shadow-lg object-cover"
            src="/images/stock/design1.jpg"
            alt="SLM Product 1"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            className="rounded-lg shadow-lg object-cover"
            src="/images/stock/design1.jpg"
            alt="SLM Product 2"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            className="rounded-lg shadow-lg object-cover"
            src="/images/stock/design1.jpg"
            alt="SLM Product 3"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            className="rounded-lg shadow-lg object-cover"
            src="/images/stock/design1.jpg"
            alt="SLM Product 4"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            className="rounded-lg shadow-lg object-cover"
            src="/images/stock/design1.jpg"
            alt="SLM Product 5"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            className="rounded-lg shadow-lg object-cover"
            src="/images/stock/design1.jpg"
            alt="SLM Product 6"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default AboutSlm;

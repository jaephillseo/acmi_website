
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CapacityTable from '@/components/capacitytable';
import LeadtimeTable from '@/components/leadtimetable';
import styles from "@/styles/productioncapacity.module.css"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};



const AboutUs = () => {

  const capacityData = [
    {
      moldType: "Casting Mold",
      monthlyCapacity: "2,000 sets",
      yearlyCapacity: "14,000 sets",
    },
    {
      moldType: "SLM Mold",
      monthlyCapacity: "500 sets",
      yearlyCapacity: "6,000 sets",
    },
  ];
  const leadtimeData = [
    {
      moldType: "Simple Outsole Mold",
      moldStage: "Sample Stage",
      leadTime: "8 Days",
    },
    {
      moldType: "IMEVA and Outsole Mold",
      moldStage: "Sample Stage",
      leadTime: "13-15 Days",
    },
    {
      moldType: "TPU Mold",
      moldStage: "Sample Stage",
      leadTime: "15 Days",
    },
  ];
  const productionLeadTimeData = [
    {
      moldType: "Simple Outsole Mold",
      moldStage: "Production Stage",
      leadTime: "21 Days",
    },
    {
      moldType: "Outsole and IMEVA Mold",
      moldStage: "Production Stage",
      leadTime: "30-33 Days",
    },
    {
      moldType: "TPU Mold",
      moldStage: "Production Stage",
      leadTime: "33 Days",
    },
  ];

  return (
    <div className="min-h-screen">
      
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

      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="mb-12"
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Our Core Values</h2>
      <p className="text-lg text-gray-600">What drives our passion for excellence</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        {/* <img src="https://via.placeholder.com/150" alt="Innovation" className="h-12 w-12 mx-auto mb-4" /> */}
        <h3 className="text-xl font-semibold">Innovation</h3>
        <p className="text-gray-600 mt-2">We embrace cutting-edge technology to lead the mold-making industry.</p>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        {/* <img src="https://via.placeholder.com/150" alt="Sustainability" className="h-12 w-12 mx-auto mb-4" /> */}
        <h3 className="text-xl font-semibold">Sustainability</h3>
        <p className="text-gray-600 mt-2">Our processes focus on eco-friendly and sustainable manufacturing.</p>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        {/* <img src="https://via.placeholder.com/150" alt="Quality" className="h-12 w-12 mx-auto mb-4" /> */}
        <h3 className="text-xl font-semibold">Quality</h3>
        <p className="text-gray-600 mt-2">Delivering superior molds with precision and reliability.</p>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        {/* <img src="https://via.placeholder.com/150" alt="Collaboration" className="h-12 w-12 mx-auto mb-4" /> */}
        <h3 className="text-xl font-semibold">Collaboration</h3>
        <p className="text-gray-600 mt-2">Partnering with clients to build solutions that exceed expectations.</p>
      </div>
    </div>
  </div>
</section>
      {/* Mission Section */}
      < section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" >
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
                Our Mission
              </h2>
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-7xl text-gray-100 -z-10">
                Mission
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <img
                src="/images/stock/acmi_prod2.jpg"
                alt="Production Capacity"
                className="rounded-2xl shadow-xl object-cover w-full aspect-square transition-transform duration-500 hover:scale-105"
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
              <div className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed lg:mt-40 space-y-4">
                <p>
                  <span className="font-semibold text-gray-800">At the core of our mission</span> is a commitment to excellence, innovation, and sustainability in mold manufacturing. We aim to lead the industry by providing high-quality, precision molds that empower our clients to shape their visions with confidence.
                </p>
                <p>
                  We believe in building lasting partnerships through trust, integrity, and superior service. As we look to the future, our goal remains steadfast: to set new standards in mold production that support a more sustainable and efficient manufacturing ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      


      {/* Vision Section - Enhanced with modern layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 space-y-6 mb-16"
          >
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Vision
              </h2>
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-7xl text-gray-100 -z-10">
                Our Vision
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 space-y-6"
            >

              <ul className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed list-disc ml-6 space-y-2">
                <li>
                  To revolutionize mold manufacturing by incorporating advanced
                  technologies that improve efficiency and precision.
                </li>
                <li>
                  To set new industry standards for sustainability and innovation,
                  paving the way for eco-friendly manufacturing practices.
                </li>
                <li>
                  To foster long-term relationships with our clients through
                  integrity, trust, and exceptional service.
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
                src="/images/stock/finetuning2.jpg"
                alt="Vision"
                className="rounded-2xl shadow-xl object-cover w-full aspect-square transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Production Capacity Section - Enhanced with modern cards */}
      < section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" >
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

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
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
                className="rounded-2xl shadow-xl object-cover w-full aspect-square transition-transform duration-500 hover:scale-105"
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
              <CapacityTable data={capacityData} />
              <p className={styles["note-text"]}>
                * The production capacity above is based on footwear mold
                capacity. Capacity may differ based on product type.
              </p>
              <LeadtimeTable data={leadtimeData} />
              <p className={styles["note-text"]}>
                * The production capacity above is based on footwear mold
                capacity. Capacity may differ based on product type.
              </p>
              <LeadtimeTable data={productionLeadTimeData} />
              <p className={styles["note-text"]}>
                * The production capacity above is based on footwear mold
                capacity. Capacity may differ based on product type.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default AboutUs;
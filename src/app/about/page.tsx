
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CapacityTable from '@/components/capacitytable';
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
              {/* <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.
              </p>
              <ul className="space-y-4 text-lg md:text-xl font-light text-gray-600 list-disc ml-6">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis.</li>
              </ul> */}
              <CapacityTable data={capacityData} />
              <p className={styles["note-text"]}>
                * The production capacity above is based on footwear mold
                capacity. Capacity may differ based on product type.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
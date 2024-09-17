

'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutSlm = () => {
  // State for tab navigation (Production Capacity, End Goal)
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/images/stock/slmstockimage.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay bg-opacity-70 z-20"></div>
        <div className="hero-content text-left text-neutral-content z-30">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-base-300 mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Selective Laser Melting (SLM)
            </motion.h1>
            <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
              Harnessing advanced technology for high-precision mold production.
            </p>
            <motion.div
              className="mt-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            </motion.div>
          </div>
        </div>
      </div>

      
      {/* Section with Interactive Tabs for Production Capacity and End Goal */}
      <section id="slm-details" className="max-w-5xl mx-auto py-16 px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Technology: Production and Vision</h2>
        </motion.div>

        {/* Tabs Section */}
        <Tabs
          className="text-center"
          index={tabIndex}
          onChange={setTabIndex}
          selectedTabClassName="bg-blue-400 text-white rounded"
        >
          <TabList className="flex justify-center space-x-4">
          <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">What is SLM</Tab>
            <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">Production Capacity</Tab>
            <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">Advantages</Tab>
          </TabList>

          <TabPanel>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
                <p>Information about SLM</p>
              </div>

            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
                <p><strong>SLM Production Capacity</strong></p>
                <ul className="list-disc ml-6 mt-4 text-lg">
                  <li>3 state-of-the-art SLM machines</li>
                  <li>Capacity to produce up to 500 molds per month</li>
                  <li>Materials: stainless steel, aluminum, and titanium</li>
                </ul>
              </div>

            </motion.div>
          </TabPanel>
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
                Our long-term vision with SLM is to automate the mold production process, reducing lead times and material waste by 30%.
              </p>
            </motion.div>
          </TabPanel>
        </Tabs>
      </section>

      {/* Product Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Product Gallery</h2>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              className="rounded-lg shadow-lg object-cover"
              src="/images/stock/design1.jpg"
              alt="SLM Product 1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
              className="rounded-lg shadow-lg object-cover"
              src="/images/stock/design1.jpg"
              alt="SLM Product 2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
              className="rounded-lg shadow-lg object-cover"
              src="/images/stock/design1.jpg"
              alt="SLM Product 3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </section>
      
    </>
  );
};

export default AboutSlm;

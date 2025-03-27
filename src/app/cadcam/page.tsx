'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AboutCADProps {}

const AboutCAD: React.FC<AboutCADProps> = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const galleryImages = [
    {
      src: "images/stock/cnc2.png",
      alt: "CNC Precision",
    },
    {
      src: "images/stock/cnc123.jpg",
      alt: "CNC Components",
    },
    {
      src: "images/stock/cnc_2.jpg",
      alt: "CNC Manufacturing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[24rem] md:h-[36rem] lg:h-[40rem] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
        >
          <div className="absolute inset-0 bg-black/30" />
          <img
            src="images/hero_img/CNChero1.jpg"
            alt="CNC Machining"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.h1
              className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <b>CAD / CAM Modeling</b>
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <b>2D & 3D Modeling for Precision Mold Development</b>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            <b>The Core of CAD/CAM at ACMI</b>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our integrated 2D and 3D CAD/CAM workflows allow us to prototype, simulate, and manufacture highly precise molds across all footwear types.
          </p>
        </motion.div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="shadow-xl rounded-xl bg-white p-8"
        >
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
            {["2D Modeling", "3D Modeling", "Simulation & CAM"].map((title, index) => (
              <Tab
                key={index}
                className="px-6 py-3 font-semibold rounded-lg transition-all cursor-pointer hover:bg-blue-50"
                selectedClassName="bg-blue-500 text-white hover:bg-blue-600"
              >
                {title}
              </Tab>
            ))}
          </TabList>

          {/* 2D Modeling */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                <b>Our 2D CAD process forms the backbone of early-stage mold development. From outsole sketches to precise technical drawings, our team ensures clarity and speed for rapid prototyping.</b>
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Outsole Sketching</h4>
                  <p>Accurate 2D drawings using tools like AutoCAD and Rhino 5.0.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Lead Time</h4>
                  <p>Fast turnaround: Only 2 working days.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          {/* 3D Modeling */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                <b>We leverage advanced software like Rhino 7/8, Unigraphics, and Materialise 3-Matic to create intricate 3D models that capture design intent, enabling faster design approval and prototyping.</b>
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">High-Detail Modeling</h4>
                  <p>Design breathable molds, vent systems, and more using 3D CAD.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Software Tools</h4>
                  <p>Materialise 3-Matic, Rhino 8.0, ShoeMagic, and more.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          {/* Simulation & CAM */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                <b>Our CAM process ensures perfect translation from digital models to real-world molds using PowerMill, MoldMagic, and 3D scanning for verification and simulation.</b>
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">CAM Simulation</h4>
                  <p>Verify and simulate mold cuts before actual machining.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">End-to-End Integration</h4>
                  <p>Seamless flow from CAD to CAM with in-house quality control.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>
        </Tabs>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Product Gallery</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore the possibilities of CAD/CAM modeling through our product showcase.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              <b>Ready to Digitize Your Mold Development?</b>
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Discover how our CAD/CAM solutions drive accuracy, speed, and innovation.
            </p>
            <Link href="/contact-us">
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                Contact Us <ArrowRight className="w-5 h-5" />
                </motion.button>
            </Link>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutCAD;

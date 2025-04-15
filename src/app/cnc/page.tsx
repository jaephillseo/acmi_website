'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCNC: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const galleryImages = [
    { src: "images/stock/cnc2.png", alt: "CNC Precision" },
    { src: "images/stock/cnc123.jpg", alt: "CNC Components" },
    { src: "images/stock/cnc_2.jpg", alt: "CNC Manufacturing" },
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
              CNC Machining
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Precision and Efficiency for Modern Mold Manufacturing
            </motion.p>
          </div>
        </div>
      </div>

      {/* Why ACMI CNC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why ACMI CNC?
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-10">
            ACMI operates one of the most complete CNC departments in Indonesia’s mold industry. With over 50 CNC machines from Korea, Japan, and Taiwan, our capabilities support mass production of precise, high-performance molds with minimal tolerances.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Local & International Brands</h4>
              <p>Featuring DOOSAN, HWACHEON, VMC Taiwan, and MORI SEIKI Japan for global-class machining standards.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Large-Volume Output</h4>
              <p>Serving up to 20,000 molds annually, CNC machining ensures speed without sacrificing accuracy.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">In-House Integration</h4>
              <p>Every CNC operation is in-house, fully integrated with our CAD/CAM, SLM, and testing teams.</p>
            </div>
          </div>
        </div>
      </section>

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
            The Power of CNC Machining
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Unlock unparalleled accuracy and efficiency with CNC machining for various mold components.
          </p>
        </motion.div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="shadow-xl rounded-xl bg-white p-8">
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
            {["Precision", "Efficiency", "Innovation"].map((title, index) => (
              <Tab
                key={index}
                className="px-6 py-3 font-semibold rounded-lg transition-all cursor-pointer hover:bg-blue-50"
                selectedClassName="bg-blue-500 text-white hover:bg-blue-600"
              >
                {title}
              </Tab>
            ))}
          </TabList>

          {/* Precision */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                CNC machining delivers unmatched precision, enabling the creation of complex molds with tight tolerances. This ensures perfect part fit, finish, and function every time.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Automotive Molds</h4>
                  <p>Critical precision for engine & rubber components.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Footwear Outsoles</h4>
                  <p>Detailed sole patterning with consistency at scale.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          {/* Efficiency */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                ACMI leverages CNC automation to reduce lead time, cut down manual processes, and improve batch consistency. That’s how we stay efficient — and competitive.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Automated Toolpaths</h4>
                  <p>Using PowerMill + CAM software to reduce runtime errors.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Reduced Downtime</h4>
                  <p>All machines are maintained and monitored daily.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          {/* Innovation */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                We don't just cut metal. We innovate in design, tooling, and SLM integration — CNC supports rapid prototyping, experimental venting systems, and smart textures for high-performance molds.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Prototyping</h4>
                  <p>Bridge design and production for fast mold trials.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Texturing & Vents</h4>
                  <p>Combine CNC with SLM to create breathable, grippy, or custom flow-control surfaces.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>
        </Tabs>
      </section>

      {/* Machines Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">CNC Machine Lineup</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Country</th>
                  <th className="py-4 px-6 text-left">Brand</th>
                  <th className="py-4 px-6 text-left">Units</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Korea", "DOOSAN", "16"],
                  ["Korea", "HWACHEON", "9"],
                  ["Taiwan", "VMC & Others", "26"],
                  ["Japan", "MORI SEIKI", "1"],
                ].map(([country, brand, units], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 font-medium">{country}</td>
                    <td className="py-4 px-6">{brand}</td>
                    <td className="py-4 px-6">{units} Units</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
              Explore the possibilities of CNC machining through our production showcase.
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Discover how CNC machining at ACMI drives precision, speed, and innovation.
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

export default AboutCNC;

'use client'
import React from "react";
import { motion } from "framer-motion";

const Machineries = () => {
  // Machinery data for the table
  const machineriesData = [
    { machine: "IMEVA Compression Machine", units: 10 },
    { machine: "CMEVA Compression Machine", units: 8 },
    { machine: "SLM 3D Printer", units: 5 },
    { machine: "SLA 3D Printer", units: 6 },
    { machine: "Injection Molding Machine", units: 12 },
    { machine: "Automatic Cutting Machine", units: 4 },
    { machine: "CNC Milling Machine", units: 7 },
    { machine: "Laser Engraving Machine", units: 3 },
    // Add more machines as necessary
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/machinery-bg.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60 z-20"></div>
        <div className="hero-content text-center text-neutral-content z-30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
              Cutting-Edge Machineries
            </h1>
            <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-light">
              Driving Efficiency and Precision with Advanced Technologies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto py-16 px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Machineries</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
            We are equipped with state-of-the-art machinery to ensure the highest quality in mold making and production processes. From **SLM** and **SLA** 3D printers to high-precision CNC machines, we leverage cutting-edge technology to drive innovation and efficiency.
          </p>
        </motion.div>
      </section>

      {/* Machinery Table Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Machinery Inventory</h2>
          </motion.div>

          {/* Machinery Table */}
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-lg font-semibold text-gray-700">Machine</th>
                  <th className="px-4 py-2 text-left text-lg font-semibold text-gray-700">Number of Units</th>
                </tr>
              </thead>
              <tbody>
                {machineriesData.map((machinery, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{machinery.machine}</td>
                    <td className="px-4 py-2">{machinery.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Machinery Showcase */}
      <section className="max-w-5xl mx-auto py-16 px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">Machinery Gallery</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/images/machines/machine1.jpg"
            className="rounded-lg shadow-lg object-cover"
            alt="High-Tech Machine 1"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="/images/machines/machine2.jpg"
            className="rounded-lg shadow-lg object-cover"
            alt="High-Tech Machine 2"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="/images/machines/machine3.jpg"
            className="rounded-lg shadow-lg object-cover"
            alt="High-Tech Machine 3"
            whileHover={{ scale: 1.05 }}
          />
          {/* Add more machinery images as needed */}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-custom-blue text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Want to Learn More About Our Machineries?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Get in touch with us today to discuss how our cutting-edge machineries can meet your production needs.
          </p>
          <a
            href="/contact"
            className="bg-white text-custom-blue font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </motion.section>
    </>
  );
};

export default Machineries;

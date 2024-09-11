'use client'
import React from "react";
import { motion } from "framer-motion";

const PrototypingServices = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/prototyping-bg.jpg)",
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
              Prototyping Services
            </h1>
            <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-light">
              Leveraging SLM & SLA Technologies for High-Precision Prototypes
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Prototyping Across Industries</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
            Utilizing our advanced **SLM** (Selective Laser Melting) and **SLA** (Stereolithography) technologies, we offer rapid prototyping solutions for a broad range of industries, including automotive, medical, consumer goods, and more. From concept to production, we help bring your ideas to life with precision and speed.
          </p>
        </motion.div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why Choose Our Prototyping Services?</h2>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Faster Time to Market</h3>
              <p className="text-gray-700">
                Our SLM and SLA technologies enable rapid prototyping, helping you bring products to market faster with fewer iterations and adjustments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">High-Precision Prototypes</h3>
              <p className="text-gray-700">
                Get highly accurate prototypes with exceptional detail, ensuring that your final product matches your vision perfectly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Reduced Costs</h3>
              <p className="text-gray-700">
                Our prototyping services reduce the cost of production by allowing you to test and refine designs before committing to mass production.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="max-w-5xl mx-auto py-16 px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Industries We Serve</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
            We offer prototyping services for a wide range of industries, helping companies from concept to final product.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Automotive Prototyping</h3>
            <p className="text-gray-700">
              We create precise prototypes for automotive parts, helping engineers and designers quickly iterate on designs.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Medical Prototyping</h3>
            <p className="text-gray-700">
              Our prototypes assist medical companies in developing highly accurate medical devices and implants.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Consumer Goods</h3>
            <p className="text-gray-700">
              From concept to product, we help consumer goods companies rapidly prototype and test new ideas before market release.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Prototyping Process</h2>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Consultation & Design</h3>
              <p className="text-gray-700">
                We collaborate with your team to understand your project goals and create a design for the prototype.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Rapid Prototyping</h3>
              <p className="text-gray-700">
                Using our SLM and SLA technologies, we produce your prototype quickly, allowing for testing and iteration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3: Feedback & Refinement</h3>
              <p className="text-gray-700">
                Based on your feedback, we refine the design and produce a final prototype, ready for further testing or production.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">Prototyping Gallery</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/images/gallery/prototype1.jpg"
              className="rounded-lg shadow-lg object-cover"
              alt="Prototype 1"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="/images/gallery/prototype2.jpg"
              className="rounded-lg shadow-lg object-cover"
              alt="Prototype 2"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="/images/gallery/prototype3.jpg"
              className="rounded-lg shadow-lg object-cover"
              alt="Prototype 3"
              whileHover={{ scale: 1.05 }}
            />
            {/* Add more prototype images as needed */}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-custom-blue text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Ready to Bring Your Idea to Life?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Contact us today to discuss how our prototyping services can help you turn your ideas into reality.
          </p>
          <a
            href="/contact"
            className="bg-white text-custom-blue font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </>
  );
};

export default PrototypingServices;

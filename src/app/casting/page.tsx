'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutCasting = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/stockcnc.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60 z-20"></div>
        <div className="hero-content text-center text-neutral-content z-30">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-base-300 mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
              Casting Mold Products
            </h1>
            <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
              Advanced molds engineered for high durability and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Product Overview Section */}
      <motion.section
        className="max-w-5xl mx-auto py-16 px-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why Choose Our Casting Molds?</h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas tortor at enim congue, vel pulvinar elit lacinia. Nunc fermentum elit ac eros fermentum, a malesuada magna cursus.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
          Our casting molds are built with the highest standards of durability and precision, ensuring that your production lines run smoothly and efficiently.
        </p>
      </motion.section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Key Features</h2>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">High Durability</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra, nunc vel ultrices feugiat, arcu libero fringilla arcu, ac tincidunt sem lectus in eros.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Precision Engineered</h3>
              <p className="text-gray-700">
                Praesent placerat, ipsum et tincidunt vehicula, urna libero dictum metus, eget consequat enim ex nec quam. Nulla a mi ac urna congue gravida.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Heat & Pressure Resistant</h3>
              <p className="text-gray-700">
                Fusce fringilla lacus vitae elit egestas, eget auctor enim blandit. Sed cursus ligula vel ligula bibendum, eget feugiat justo ultricies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Specifications Section */}
      <motion.section
        className="max-w-5xl mx-auto py-16 px-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">Product Specifications</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          Our casting molds are designed to meet the toughest production demands. Below are the specifications:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Material</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec tortor sed augue lobortis convallis.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tolerance</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa convallis, interdum ligula sed, vestibulum arcu.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Max Temperature</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat metus et justo malesuada, eget fermentum justo euismod.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Max Pressure</h3>
            <p className="text-gray-700">
              Sed id nulla at sapien auctor sodales. Donec sit amet eros vel ipsum posuere venenatis.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Applications Section */}
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

      {/* Product Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">Product Gallery</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/images/gallery/casting1.jpg"
              className="rounded-lg shadow-lg object-cover"
              alt="Casting Mold Product 1"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="/images/gallery/casting2.jpg"
              className="rounded-lg shadow-lg object-cover"
              alt="Casting Mold Product 2"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="/images/gallery/casting3.jpg"
              className="rounded-lg shadow-lg object-cover"
              alt="Casting Mold Product 3"
              whileHover={{ scale: 1.05 }}
            />
            {/* Additional product images... */}
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Ready to Learn More?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Contact us today to discover how our casting molds can revolutionize your production line.
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

export default AboutCasting;

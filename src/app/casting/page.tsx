'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutCasting = () => {
  const galleryImages = [
    {
      src: 'images/stock/casting_4.jpg',
      alt: "Midsole Mockup",
    },
    {
      src: 'images/stock/casting.png',
      alt: "Industrial Prototype",
    },
    {
      src: 'images/stock/casting2.jpg',
      alt: "Finished Product",
    }
  ];
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[40rem] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/hero_img/CNChero1.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60 z-20"></div>
        <div className="hero-content text-center text-neutral-content z-30">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-base-300 mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
              Advanced Casting Mold Solutions
            </h1>
            <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
              Precision molds designed for high-performance and efficiency in manufacturing.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <motion.section
        className="max-w-5xl mx-auto py-16 px-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why Choose Our Casting Molds?</h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
          Our casting molds are engineered for exceptional durability and precision, tailored to meet diverse manufacturing demands with unparalleled quality.
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/stock/casting.png"
                alt="High Durability"
                className="object-cover h-48 w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">High Durability</h3>
                <p className="text-gray-700">
                  Our molds are built to withstand extreme manufacturing conditions, ensuring longevity and consistent performance.
                </p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/stock/casting2.jpg"
                alt="Precision Engineered"
                className="object-cover h-48 w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Precision Engineered</h3>
                <p className="text-gray-700">
                  Designed with cutting-edge technology for accurate and flawless production across all industries.
                </p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/stock/casting.png"
                alt="Heat and Pressure Resistant"
                className="object-cover h-48 w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Heat & Pressure Resistant</h3>
                <p className="text-gray-700">
                  Engineered to handle extreme heat and pressure, making them ideal for high-demand applications.
                </p>
              </div>
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
          Designed to handle the toughest production demands, our casting molds offer unmatched performance. Below are the specifications:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Material</h3>
            <p className="text-gray-700">
              Premium-grade alloy steel for superior strength and extended durability.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tolerance</h3>
            <p className="text-gray-700">
              Precision-machined with tolerances as tight as ±0.05mm for critical applications.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Max Temperature</h3>
            <p className="text-gray-700">
              Resistant to temperatures up to 1200°C, suitable for high-heat manufacturing processes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Max Pressure</h3>
            <p className="text-gray-700">
              Designed to endure pressures exceeding 200 MPa, ensuring reliable performance under stress.
            </p>
          </div>
        </div>
      </motion.section>

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
                    Explore how SLA technology enables groundbreaking prototypes and final-use products.
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
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Take Your Manufacturing to the Next Level</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Discover how our advanced casting molds can enhance your production capabilities. Contact us today to learn more.
          </p>
          <a
            href="/contact-us"
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

'use client';

import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MoldTestingProps {}

const MoldTesting: React.FC<MoldTestingProps> = () => {
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], ['0%', '-20%']);

  const features = [
    {
      title: 'Comprehensive Testing Capabilities',
      description:
        'Equipped with state-of-the-art testing machines to validate mold performance under real-world conditions.',
      image: 'https://images.unsplash.com/photo-1581092331941-2a2691c1f34e?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'One-Stop Solution',
      description:
        'Eliminating the need for back-and-forth transportation, we ensure efficiency and accuracy in testing.',
      image: 'https://images.unsplash.com/photo-1605031247083-0038f36d8a4d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Customer-Centric Approach',
      description:
        'Providing seamless testing solutions tailored to our customers’ needs.',
      image: 'https://images.unsplash.com/photo-1615460736106-621995f6b0f0?q=80&w=800&auto=format&fit=crop',
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
          style={{ y: yOffset }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <img
            src="https://images.unsplash.com/photo-1517059224940-d4af9eec41ef?q=80&w=800&auto=format&fit=crop"
            alt="Mold Testing Technology"
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
              Mold Testing Solutions
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Revolutionizing testing with advanced in-house capabilities.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We bring all testing capabilities in-house, offering unmatched efficiency, precision, and convenience for our customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-t-lg h-48 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience Seamless Testing?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Discover how our in-house testing capabilities can save time and deliver exceptional results for your molds.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MoldTesting;

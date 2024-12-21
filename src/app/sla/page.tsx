'use client';

import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";

interface AboutSlaProps {}

const AboutSla: React.FC<AboutSlaProps> = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

  const galleryImages = [
    {
      src: 'images/stock/slaprocess.jpg',
      alt: "Midsole Mockup",
      caption: "High-precision midsole mockups for footwear design"
    },
    {
      src: 'images/stock/slaprocess.jpg',
      alt: "Industrial Prototype",
      caption: "Detailed SLA prototypes for industrial applications"
    },
    {
      src: 'images/stock/slaprocess.jpg',
      alt: "Finished Product",
      caption: "Finished SLA products with premium surface quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[24rem] md:h-[36rem] lg:h-[40rem] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
          style={{ y: yOffset }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <img
            src="images/hero_img/sla_hero.jpg"
            alt="SLA Technology"
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
              Stereolithography (SLA)
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Precision Prototyping for Every Industry
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
            SLA Technology: Transforming Ideas into Reality
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience the speed and precision of SLA for footwear mockups, industrial prototypes, and finished products.
          </p>
        </motion.div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="shadow-xl rounded-xl bg-white p-8"
        >
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
            {["Precision", "Versatility", "Impact"].map((title, index) => (
              <Tab
                key={index}
                className="px-6 py-3 font-semibold rounded-lg transition-all cursor-pointer hover:bg-blue-50"
                selectedClassName="bg-blue-500 text-white hover:bg-blue-600"
              >
                {title}
              </Tab>
            ))}
          </TabList>

          {/* Precision Tab */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                SLA technology enables unmatched precision, delivering detailed mockups and finished products with superior surface quality. Ideal for applications requiring accuracy and consistency.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Footwear Mockups</h4>
                  <p>Create detailed midsole prototypes to streamline design and production cycles.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Material Excellence</h4>
                  <p>Utilize advanced resins for versatile prototyping across multiple industries.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          {/* Versatility Tab */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                From footwear mockups to industrial components, SLA's versatility shines in its ability to adapt to diverse manufacturing needs. Whether for prototyping or final-use products, SLA ensures quality and efficiency at every step.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Broad Applications</h4>
                  <p>Perfect for industries like footwear, automotive, aerospace, and medical, offering reliable solutions for each unique requirement.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Customizable Designs</h4>
                  <p>Easily modify prototypes and production models without the need for expensive tooling or rework.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          {/* Impact Tab */}
          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                SLA technology delivers measurable impact by reducing waste, accelerating production, and ensuring sustainability. Its advanced capabilities align with modern manufacturing demands while maintaining exceptional results.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Sustainability</h4>
                  <p>Reduce material waste by up to 30% with precision layer-by-layer construction.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Efficiency</h4>
                  <p>Accelerate production cycles, cutting lead times by up to 50% for faster market delivery.</p>
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
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
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
              Ready to Elevate Your Prototyping Process?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Discover how our SLA technology can revolutionize your production journey.
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

export default AboutSla;

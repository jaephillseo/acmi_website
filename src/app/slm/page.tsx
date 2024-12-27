'use client';

import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";
import Table from "@/components/tables";

interface AboutSlmProps {}

interface TableRow {
  feature:string;
  value:string;
}

const AboutSlm: React.FC<AboutSlmProps> = () => {
  const [enhancedTabIndex, setEnhancedTabIndex] = useState<number>(0);
  const [slmTabIndex, setSlmTabIndex] = useState<number>(0);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

  const applications = [
    {
      title: "Footwear Mold Manufacturing",
      description: "Creating intricate mold designs with exceptional detail and durability for footwear production, enabling innovative shoe designs and improved comfort.",
      icon: <Target className="w-8 h-8 mb-4 text-blue-500" />
    },
    {
      title: "Industrial Applications",
      description: "Producing complex industrial components with high precision and strength, perfect for manufacturing tools and specialized equipment.",
      icon: <Zap className="w-8 h-8 mb-4 text-blue-500" />
    },
    {
      title: "Aerospace Components",
      description: "Developing lightweight yet strong parts for aerospace applications, meeting strict industry standards while reducing material waste.",
      icon: <Shield className="w-8 h-8 mb-4 text-blue-500" />
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      alt: "Precision Mold Component",
      caption: "High-precision SLM manufactured component"
    },
    {
      src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop",
      alt: "Industrial Application",
      caption: "Industrial-grade SLM product"
    },
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
      alt: "Advanced Manufacturing",
      caption: "Next-generation manufacturing solution"
    }
  ];

  const machines = [
    {
      brand: "Farsoon",
      image: "images/slm/slm1.png",
      logo: "images/slm/farsoonlogo2.png",
      specs: [
        { feature: "Model", value: "SLM 350" },
        { feature: "Quantity", value: "3 Units" },
        { feature: "Laser Type", value: "4 Head Laser" },
        { feature: "Material", value: "316L Steel, AlSi 10mg" },
      ],
    },
    {
      brand: "Uniontech",
      image: "images/slm/uniontechmuees.png",
      logo: "images/slm/uniontechlogo.png",
      specs: [
        { feature: "Model", value: "Muees 430" },
        { feature: "Quantity", value: "1 Unit" },
        { feature: "Technology", value: "Stereolithography" },
        { feature: "Material", value: "High-Resin Polymers" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Enhanced Parallax */}
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
            src="images/hero_img/slm_hero.png"
            alt="SLM Technology"
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
              Selective Laser Melting (SLM)
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Revolutionary precision manufacturing for the future of mold production
            </motion.p>
          </div>
        </div>
      </div>

      {/* Enhanced Tabs Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            SLM Technology: Shaping the Future
          </h2>
          
        </motion.div>

        <Tabs
          selectedIndex={enhancedTabIndex}
          onSelect={(index) => setEnhancedTabIndex(index)}
          className="shadow-xl rounded-xl bg-white p-8"
        >
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
            {["Technology Overview", "Production Capacity", "Key Advantages"].map((title, index) => (
              <Tab
                key={index}
                className="px-6 py-3 font-semibold rounded-lg transition-all cursor-pointer hover:bg-blue-50"
                selectedClassName="bg-blue-500 text-white hover:bg-blue-600"
              >
                {title}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                SLM technology represents the pinnacle of additive manufacturing, using high-powered lasers to create complex metal components with unprecedented precision. 
                Our advanced systems can produce intricate geometries that traditional manufacturing methods simply cannot achieve.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Process Excellence</h4>
                  <p>Layer-by-layer construction with micron-level precision, ensuring exceptional quality in every component.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Material Innovation</h4>
                  <p>Compatible with a wide range of metal powders, enabling versatile applications across industries.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">500+</h4>
                  <p className="text-gray-700">Monthly Mold Capacity</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">3</h4>
                  <p className="text-gray-700">Advanced SLM Machines</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">99.9%</h4>
                  <p className="text-gray-700">Production Accuracy</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Precision", desc: "Achieve tolerances as tight as ±0.1mm" },
                  { title: "Efficiency", desc: "Reduce production time by up to 50%" },
                  { title: "Sustainability", desc: "Minimize material waste by 30%" },
                  { title: "Complexity", desc: "Create intricate internal structures" },
                  { title: "Customization", desc: "Easily modify designs without tooling" },
                  { title: "Quality", desc: "Consistent results across production runs" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-xl mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabPanel>
        </Tabs>
      </section>

      {/* SLM Machine Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Our SLM Machines
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the advanced equipment driving our precision manufacturing.
            </p>
          </motion.div>

          <Tabs
            selectedIndex={slmTabIndex}
            onSelect={(index) => setSlmTabIndex(index)}
            className="shadow-xl rounded-xl bg-white p-8"
          >
            <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
              {machines.map((machine, index) => (
                <Tab
                  key={index}
                  className="px-6 py-3 font-semibold rounded-lg transition-all cursor-pointer hover:bg-blue-50"
                  selectedClassName="bg-blue-500 text-white hover:bg-blue-600"
                >
                  {machine.brand}
                </Tab>
              ))}
            </TabList>

            {machines.map((machine, index) => (
              <TabPanel key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row items-center gap-8"
                >
                  <div className="w-full lg:w-1/2">
                    <img
                      src={machine.image}
                      alt={`${machine.brand} Machine`}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex justify-center mb-6">
                      <img
                        src={machine.logo}
                        alt={`${machine.brand} Logo`}
                        className="h-46 object-contain"
                      />
                    </div>
                    <table className="table-auto w-full bg-gray-50 rounded-lg shadow-md">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="p-3 text-left">Feature</th>
                          <th className="p-3 text-left">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {machine.specs.map((spec, specIndex) => (
                          <tr
                            key={specIndex}
                            className="border-t border-gray-200 hover:bg-blue-50"
                          >
                            <td className="p-3 font-semibold">{spec.feature}</td>
                            <td className="p-3">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced Applications Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Industry Applications</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Transforming manufacturing across multiple sectors with precision and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  {app.icon}
                  <h3 className="text-xl font-semibold mb-4">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
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
              Explore our portfolio of precision-engineered components
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
              Ready to Transform Your Manufacturing Process?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's discuss how our SLM technology can revolutionize your production
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

export default AboutSlm;
// Keep your existing imports
'use client';

import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ArrowRight, Zap, Shield, Target, CheckCircle2, Clock, Sparkles, ChevronRight, Award, Users, BarChart } from "lucide-react";

interface AboutSlaProps {}

const AboutSla: React.FC<AboutSlaProps> = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

  const galleryImages = [
    { src: 'images/stock/slaprocess.jpg', alt: "Midsole Mockup" },
    { src: 'images/stock/sla(4).jpg', alt: "Industrial Prototype" },
    { src: 'images/stock/sla_1.jpg', alt: "Finished Product" }
  ];

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: "Rapid Prototyping", description: "Quick turnaround for design iterations." },
    { icon: <Shield className="w-8 h-8" />, title: "Precision Engineering", description: "Achieves tolerance as low as ±0.1 mm." },
    { icon: <Sparkles className="w-8 h-8" />, title: "Superior Finish", description: "Delivers smooth, near-injection-quality surface." },
    { icon: <CheckCircle2 className="w-8 h-8" />, title: "Quality Assured", description: "Consistent accuracy across every build." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="relative h-[24rem] md:h-[36rem] lg:h-[40rem] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
          style={{ y: yOffset }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <img src="images/hero_img/sla_hero.jpg" alt="SLA Technology" className="object-cover w-full h-full" />
        </motion.div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.h1 className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Stereolithography (SLA)
            </motion.h1>
            <motion.p className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              High-Fidelity Prototyping — From Idea to Validation
            </motion.p>
          </div>
        </div>
      </div>

      {/* Why SLA at ACMI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why SLA at ACMI?
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            ACMI’s in-house SLA printing center is equipped with industrial-grade machines capable of supporting a wide range of applications, from **footwear mockups** to **end-use components**. We help clients accelerate validation, shorten tooling lead time, and produce better results with lower waste.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Industrial Capacity</h4>
              <p>Up to 7 SLA printers running simultaneously for multi-project agility and scale.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Cross-Sector Compatibility</h4>
              <p>Footwear, automotive, medical, and general manufacturing use-cases covered.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Reduced Tooling Dependency</h4>
              <p>Eliminate or delay mold investments by validating function and fit early.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            SLA Technology: Transforming Ideas into Reality
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience high-speed prototyping with unmatched detail and surface quality — tailored for your industry.
          </p>
        </motion.div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="shadow-xl rounded-xl bg-white p-8">
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
            {["Precision", "Versatility", "Impact"].map((title, index) => (
              <Tab key={index}
                className="px-6 py-3 font-semibold rounded-lg transition-all cursor-pointer hover:bg-blue-50"
                selectedClassName="bg-blue-500 text-white hover:bg-blue-600"
              >
                {title}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <motion.div className="space-y-6 text-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-lg leading-relaxed">
                SLA technology produces prototypes with micro-level precision and high repeatability. Ideal for verifying fit, function, and visual appeal — especially where tolerance matters.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Footwear & Midsole</h4>
                  <p>Visualize and validate sole contours, venting, and grip patterns in high fidelity.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Assembly Testing</h4>
                  <p>Check interlocking part tolerances and mechanical fit before investing in molds.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div className="space-y-6 text-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-lg leading-relaxed">
                Whether you’re designing orthopedic insoles or automotive brackets, SLA gives you the freedom to iterate designs without production delays. From translucent shells to elastomeric skins — we've got the materials to match your use case.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Wide Material Range</h4>
                  <p>Choose from durable, flexible, transparent, or heat-resistant SLA resins.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Scalable Design Feedback</h4>
                  <p>Speed up product approvals across design, engineering, and brand teams.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div className="space-y-6 text-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-lg leading-relaxed">
                SLA cuts lead times, reduces raw material waste, and improves design efficiency. It’s not just prototyping — it’s future-forward manufacturing.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Eco-Conscious Workflow</h4>
                  <p>Supports lean manufacturing with minimal supports and post-processing waste.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Time-to-Market</h4>
                  <p>Launch products faster by eliminating traditional sampling bottlenecks.</p>
                </div>
              </div>
            </motion.div>
          </TabPanel>
        </Tabs>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Key Features</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">Discover what makes our SLA workflow fast, flexible, and reliable.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Product Gallery</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              See how SLA brings your digital designs to life.
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
                <img src={image.src} alt={image.alt} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Prototyping Process?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us today to explore how SLA can reduce lead time, improve quality, and help your ideas take shape.
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

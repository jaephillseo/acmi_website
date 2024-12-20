'use client';
import React from 'react';
import { motion } from 'framer-motion';
import MachineCategory from '@/components/machinecategory';
import StatCard from '@/components/statcard';
import '@/styles/machinerypage.css';

const machineryData = {
  cadcam: [
    { name: 'PLOTTER', units: '3 units' },
    { name: '2D SCAN', units: '1 unit' },
    { name: '3D SCANNER', units: '2 units' },
    { name: 'CUTTING M/C', units: '2 units' },
  ],
  cnc: [
    { name: 'KOREA: DOOSAN', units: '16 units' },
    { name: 'HWACHEON', units: '9 units' },
    { name: 'TAIWAN: VMC & Other', units: '26 units' },
    { name: 'JAPAN: MORI SEIKI', units: '1 unit' },
  ],
  casting: [
    { name: 'STEEL CASTING', units: '5 units' },
    { name: 'CERAMIC MIXER', units: '1 unit' },
    { name: 'DRYING FURNACE', units: '2 units' },
    { name: 'MELTING FURNACE', units: '2 units' },
  ],
  assembly: [
    { name: 'MILLING MACHINE', units: '20 units' },
    { name: 'SHAPER MACHINE', units: '4 units' },
    { name: 'ELECTRIC WELDER', units: '4 units' },
    { name: 'EDM DRILLING', units: '7 units' },
  ],
  texturing: [
    { name: 'ROTARY EROSIONS', units: '3 units' },
    { name: 'SPRAY BOOTH', units: '2 units' },
    { name: 'DRYING CHAMBER', units: '2 units' },
  ],
  coating: [
    { name: 'SANDING MACHINE', units: '2 units' },
    { name: 'BAUXITE CROSS MACHINE', units: '1 unit' },
    { name: 'CHROME MACHINE', units: '1 unit' },
    { name: 'NANO COATING', units: '1 unit' },
  ],
};

export default function Machineries() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="images/hero_img/machinery_hero.jpg" // Replace with the actual path to your hero image
            alt="Machinery Hero"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Machineries
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              State-of-the-art equipment powering precision manufacturing
            </motion.p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto py-16 px-5 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Summary
        </motion.h2>
      </section>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard title="Total Machines" value="110+" delay={0.1} />
          <StatCard title="Categories" value="6" delay={0.2} />
          <StatCard title="Years Experience" value="25+" delay={0.3} />
          <StatCard title="Projects Completed" value="1000+" delay={0.4} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Machine Categories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MachineCategory
            title="CAD/CAM"
            machines={machineryData.cadcam}
            color="bg-primary"
            delay={0.1}
          />
          <MachineCategory
            title="CNC"
            machines={machineryData.cnc}
            color="bg-error"
            delay={0.2}
          />
          <MachineCategory
            title="CASTING"
            machines={machineryData.casting}
            color="bg-primary"
            delay={0.3}
          />
          <MachineCategory
            title="ASSEMBLY"
            machines={machineryData.assembly}
            color="bg-error"
            delay={0.4}
          />
          <MachineCategory
            title="TEXTURING"
            machines={machineryData.texturing}
            color="bg-primary"
            delay={0.5}
          />
          <MachineCategory
            title="COATING"
            machines={machineryData.coating}
            color="bg-error"
            delay={0.6}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-200">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our advanced machinery can bring your vision to life.
            </p>
            <button className="btn btn-lg">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

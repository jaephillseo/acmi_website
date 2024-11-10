// // 'use client';
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// // import "react-tabs/style/react-tabs.css";

// // const AboutSlm = () => {
// //   // State for tab navigation (Production Capacity, End Goal)
// //   const [tabIndex, setTabIndex] = useState(0);

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <div
// //         className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative overflow-hidden"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/hero_img/slm_hero.png)",
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center'
// //         }}
// //       >
// //         <div className="hero-overlay z-20"></div>
// //         <div className="hero-content text-left text-neutral-content z-30">
// //           <div className="max-w-3xl mx-auto">
// //             <motion.h1
// //               className="text-base-300 mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
// //               initial={{ opacity: 0, y: -30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 1 }}
// //             >
// //               Selective Laser Melting (SLM)
// //             </motion.h1>
// //             <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
// //               Harnessing advanced technology for high-precision mold production.
// //             </p>
// //             <motion.div
// //               className="mt-5"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>


// //       {/* Section with Interactive Tabs for Production Capacity and End Goal */}
// //       <section id="slm-details" className="max-w-5xl mx-auto py-16 px-5">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Technology: Production and Vision</h2>
// //         </motion.div>

// //         {/* Tabs Section */}
// //         <Tabs
// //           className="text-center"
// //           index={tabIndex}
// //           onChange={setTabIndex}
// //           selectedTabClassName="bg-blue-400 text-white rounded"
// //         >
// //           <TabList className="flex justify-center space-x-4">
// //             <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">What is SLM</Tab>
// //             <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">Production Capacity</Tab>
// //             <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">Advantages</Tab>
// //           </TabList>

// //           <TabPanel>
// //             <motion.div
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
// //                 <p>Information about SLM</p>
// //               </div>

// //             </motion.div>
// //           </TabPanel>

// //           <TabPanel>
// //             <motion.div
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
// //                 <p><strong>SLM Production Capacity</strong></p>
// //                 <ul className="list-disc ml-6 mt-4 text-lg">
// //                   <li>3 state-of-the-art SLM machines</li>
// //                   <li>Capacity to produce up to 500 molds per month</li>
// //                   <li>Materials: stainless steel, aluminum, and titanium</li>
// //                 </ul>
// //               </div>

// //             </motion.div>
// //           </TabPanel>
// //           <TabPanel>
// //             <motion.div
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
// //                 Our long-term vision with SLM is to automate the mold production process, reducing lead times and material waste by 30%.
// //               </p>
// //             </motion.div>
// //           </TabPanel>
// //         </Tabs>
// //       </section>

// //       <section className="max-w-5xl mx-auto py-16 px-5 text-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications of SLM Technology</h2>
// //           <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
// //             SLM technology is widely used in various industries, from prototyping and product design to dental, medical, and engineering applications.
// //           </p>
// //         </motion.div>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           <motion.div
// //             className="bg-gray-100 p-6 rounded-lg shadow-lg"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h3 className="text-xl font-semibold mb-4">Footwear Mold</h3>
// //             <p className="text-gray-700">
// //               Create highly detailed and functional prototypes for automotive parts, helping designers and engineers streamline production.
// //             </p>
// //           </motion.div>
// //           <motion.div
// //             className="bg-gray-100 p-6 rounded-lg shadow-lg"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h3 className="text-xl font-semibold mb-4">Dental Applications</h3>
// //             <p className="text-gray-700">
// //               SLA is used to create precise dental models and prosthetics, enhancing the accuracy of dental treatments.
// //             </p>
// //           </motion.div>
// //           <motion.div
// //             className="bg-gray-100 p-6 rounded-lg shadow-lg"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h3 className="text-xl font-semibold mb-4">Aerospace Industry</h3>
// //             <p className="text-gray-700">
// //               SLA enables the production of highly accurate medical devices and models for testing, research, and development.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Product Gallery Section */}
// //       <section className="bg-gray-100 py-16">
// //         <div className="max-w-5xl mx-auto px-5">
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Product Gallery</h2>
// //           </motion.div>

// //           {/* Gallery Grid */}
// //           <motion.div
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <motion.img
// //               className="rounded-lg shadow-lg object-cover"
// //               src="/images/stock/design1.jpg"
// //               alt="SLM Product 1"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             />
// //             <motion.img
// //               className="rounded-lg shadow-lg object-cover"
// //               src="/images/stock/design1.jpg"
// //               alt="SLM Product 2"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             />
// //             <motion.img
// //               className="rounded-lg shadow-lg object-cover"
// //               src="/images/stock/design1.jpg"
// //               alt="SLM Product 3"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             />
// //           </motion.div>
// //         </div>
// //       </section>

// //     </>
// //   );
// // };

// // export default AboutSlm;
// 'use client';
// import React, { useState } from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// // TypeScript interface for component props (if any)
// interface AboutSlmProps { }

// const AboutSlm: React.FC<AboutSlmProps> = () => {
//   const [tabIndex, setTabIndex] = useState<number>(0);

//   // Parallax effect for the hero section
//   const { scrollY } = useViewportScroll();
//   const yOffset = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

//   return (
//     <>
//       {/* Hero Section with Parallax Effect */}
//       <div
//         className="hero h-[24rem] md:h-[36rem] lg:h-[40rem] relative overflow-hidden"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/hero_img/slm_hero.png)",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <motion.div className="absolute inset-0" style={{ y: yOffset }}>
//           <div className="hero-content text-left text-neutral-content flex justify-center items-center h-full">
//             <div className="max-w-3xl mx-auto text-center px-4">
//               <motion.h1
//                 className="text-white mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 Selective Laser Melting (SLM)
//               </motion.h1>
//               <p className="text-white text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
//                 Harnessing advanced technology for high-precision mold production.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Section with Interactive Tabs for Production Capacity and End Goal */}
//       <section id="slm-details" className="max-w-5xl mx-auto py-16 px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Technology: Production and Vision</h2>
//         </motion.div>

//         {/* Tabs Section */}
//         <Tabs
//           className="text-center"
//           selectedIndex={tabIndex}
//           onSelect={(index) => setTabIndex(index)}
//           selectedTabClassName="bg-blue-500 text-white rounded-md"
//         >
//           <TabList className="flex justify-center space-x-4 mb-8">
//             <Tab className="font-semibold text-lg px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 rounded-md">
//               What is SLM
//             </Tab>
//             <Tab className="font-semibold text-lg px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 rounded-md">
//               Production Capacity
//             </Tab>
//             <Tab className="font-semibold text-lg px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 rounded-md">
//               Advantages
//             </Tab>
//           </TabList>

//           <TabPanel>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
//                 Selective Laser Melting (SLM) is an advanced additive manufacturing technology that uses a high-power laser to melt and fuse fine metal powders layer by layer. 
//                 This process allows for the creation of highly detailed and intricate metal components directly from digital designs, offering unmatched precision and durability.

//                 At ACMI, we leverage SLM technology to produce top-quality molds with complex geometries, which traditional manufacturing methods cannot achieve. 
//                 Our SLM molds provide enhanced durability and fine details that result in better end-products, particularly benefiting industries requiring high levels of precision, such as footwear.

//                 While our primary focus remains on producing molds for footwear, our SLM capabilities extend to any industry that requires high-precision and durable metal components.
//                 From dental to aerospace and beyond, we are equipped to meet the demands of various sectors that can benefit from the unique advantages of SLM technology.
//               </p>
//             </motion.div>
//           </TabPanel>

//           <TabPanel>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
//                 <p><strong>SLM Production Capacity</strong></p>
//                 <ul className="list-disc ml-6 mt-4">
//                   <li>3 state-of-the-art SLM machines</li>
//                   <li>Capacity to produce up to 500 molds per month</li>
//                   <li>Materials: stainless steel, aluminum, and titanium</li>
//                 </ul>
//               </div>
//             </motion.div>
//           </TabPanel>

//           <TabPanel>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
//                 Our vision with SLM is to automate mold production, reducing lead times and material waste by 30%.
//               </p>
//             </motion.div>
//           </TabPanel>
//         </Tabs>
//       </section>

//       {/* Applications of SLM Technology */}
//       <section className="max-w-5xl mx-auto py-16 px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications of SLM Technology</h2>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
//             SLM technology is used in diverse fields such as prototyping, dental, medical, and engineering applications.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {["Footwear Mold", "Dental Applications", "Aerospace Industry"].map((title, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-100 p-6 rounded-lg shadow-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h3 className="text-xl font-semibold mb-4">{title}</h3>
//               <p className="text-gray-700">
//                 {/* Placeholder content */}
//                 Description for {title}.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Product Gallery Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Product Gallery</h2>
//           </motion.div>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             {Array(3).fill("/images/stock/design1.jpg").map((src, i) => (
//               <motion.img
//                 key={i}
//                 className="rounded-lg shadow-lg object-cover w-full h-64"
//                 src={src}
//                 alt={`SLM Product ${i + 1}`}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutSlm;
'use client';

import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";

interface AboutSlmProps {}

const AboutSlm: React.FC<AboutSlmProps> = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Enhanced Parallax */}
      <div className="relative h-[24rem] md:h-[36rem] lg:h-[40rem] overflow-hidden">
        <motion.div 
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
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our advanced SLM technology is revolutionizing mold manufacturing
          </p>
        </motion.div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
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
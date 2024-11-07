// 'use client';
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const AboutSlm = () => {
//   // State for tab navigation (Production Capacity, End Goal)
//   const [tabIndex, setTabIndex] = useState(0);

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative overflow-hidden"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/hero_img/slm_hero.png)",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="hero-overlay z-20"></div>
//         <div className="hero-content text-left text-neutral-content z-30">
//           <div className="max-w-3xl mx-auto">
//             <motion.h1
//               className="text-base-300 mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               Selective Laser Melting (SLM)
//             </motion.h1>
//             <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
//               Harnessing advanced technology for high-precision mold production.
//             </p>
//             <motion.div
//               className="mt-5"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//             </motion.div>
//           </div>
//         </div>
//       </div>


//       {/* Section with Interactive Tabs for Production Capacity and End Goal */}
//       <section id="slm-details" className="max-w-5xl mx-auto py-16 px-5">
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
//           index={tabIndex}
//           onChange={setTabIndex}
//           selectedTabClassName="bg-blue-400 text-white rounded"
//         >
//           <TabList className="flex justify-center space-x-4">
//             <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">What is SLM</Tab>
//             <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">Production Capacity</Tab>
//             <Tab className="font-bold text-lg px-4 py-2 cursor-pointer transition-colors duration-300">Advantages</Tab>
//           </TabList>

//           <TabPanel>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
//                 <p>Information about SLM</p>
//               </div>

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
//                 <ul className="list-disc ml-6 mt-4 text-lg">
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
//                 Our long-term vision with SLM is to automate the mold production process, reducing lead times and material waste by 30%.
//               </p>
//             </motion.div>
//           </TabPanel>
//         </Tabs>
//       </section>

//       <section className="max-w-5xl mx-auto py-16 px-5 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications of SLM Technology</h2>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
//             SLM technology is widely used in various industries, from prototyping and product design to dental, medical, and engineering applications.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <motion.div
//             className="bg-gray-100 p-6 rounded-lg shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Footwear Mold</h3>
//             <p className="text-gray-700">
//               Create highly detailed and functional prototypes for automotive parts, helping designers and engineers streamline production.
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-gray-100 p-6 rounded-lg shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Dental Applications</h3>
//             <p className="text-gray-700">
//               SLA is used to create precise dental models and prosthetics, enhancing the accuracy of dental treatments.
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-gray-100 p-6 rounded-lg shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Aerospace Industry</h3>
//             <p className="text-gray-700">
//               SLA enables the production of highly accurate medical devices and models for testing, research, and development.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Gallery Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-5xl mx-auto px-5">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Product Gallery</h2>
//           </motion.div>

//           {/* Gallery Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.img
//               className="rounded-lg shadow-lg object-cover"
//               src="/images/stock/design1.jpg"
//               alt="SLM Product 1"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//             <motion.img
//               className="rounded-lg shadow-lg object-cover"
//               src="/images/stock/design1.jpg"
//               alt="SLM Product 2"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//             <motion.img
//               className="rounded-lg shadow-lg object-cover"
//               src="/images/stock/design1.jpg"
//               alt="SLM Product 3"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
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

// TypeScript interface for component props (if any)
interface AboutSlmProps {}

const AboutSlm: React.FC<AboutSlmProps> = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  // Parallax effect for the hero section
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[40rem] relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/hero_img/slm_hero.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div className="absolute inset-0" style={{ y: yOffset }}>
          <div className="hero-content text-left text-neutral-content flex justify-center items-center h-full">
            <div className="max-w-3xl mx-auto text-center px-4">
              <motion.h1
                className="text-white mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Selective Laser Melting (SLM)
              </motion.h1>
              <p className="text-white text-lg md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed">
                Harnessing advanced technology for high-precision mold production.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section with Interactive Tabs for Production Capacity and End Goal */}
      <section id="slm-details" className="max-w-5xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Technology: Production and Vision</h2>
        </motion.div>

        {/* Tabs Section */}
        <Tabs
          className="text-center"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName="bg-blue-500 text-white rounded-md"
        >
          <TabList className="flex justify-center space-x-4 mb-8">
            <Tab className="font-semibold text-lg px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 rounded-md">
              What is SLM
            </Tab>
            <Tab className="font-semibold text-lg px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 rounded-md">
              Production Capacity
            </Tab>
            <Tab className="font-semibold text-lg px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 rounded-md">
              Advantages
            </Tab>
          </TabList>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
                Information about SLM technology and its capabilities in mold production.
              </p>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
                <p><strong>SLM Production Capacity</strong></p>
                <ul className="list-disc ml-6 mt-4">
                  <li>3 state-of-the-art SLM machines</li>
                  <li>Capacity to produce up to 500 molds per month</li>
                  <li>Materials: stainless steel, aluminum, and titanium</li>
                </ul>
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6">
                Our vision with SLM is to automate mold production, reducing lead times and material waste by 30%.
              </p>
            </motion.div>
          </TabPanel>
        </Tabs>
      </section>

      {/* Applications of SLM Technology */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications of SLM Technology</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
            SLM technology is used in diverse fields such as prototyping, dental, medical, and engineering applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Footwear Mold", "Dental Applications", "Aerospace Industry"].map((title, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-700">
                {/* Placeholder content */}
                Description for {title}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">SLM Product Gallery</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {Array(3).fill("/images/stock/design1.jpg").map((src, i) => (
              <motion.img
                key={i}
                className="rounded-lg shadow-lg object-cover w-full h-64"
                src={src}
                alt={`SLM Product ${i + 1}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSlm;

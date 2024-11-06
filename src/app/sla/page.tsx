// 'use client'
// import React from "react";
// import { motion } from "framer-motion";

// const AboutSla = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/sla-background.jpg)",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60 z-20"></div>
//         <div className="hero-content text-center text-neutral-content z-30">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
//               Stereolithography (SLA)
//             </h1>
//             <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-light">
//               Precision and Detail in 3D Printing
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* SLA Technology Overview Section */}
//       <section className="max-w-5xl mx-auto py-16 px-5 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold mb-8">What is SLA Technology?</h2>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
//             Stereolithography (SLA) is a 3D printing technology that uses a laser to solidify liquid resin into intricate, highly detailed parts. It is ideal for producing precision molds and prototypes with smooth finishes.
//           </p>
//         </motion.div>
//       </section>

//       {/* Key Benefits Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-5xl mx-auto px-5">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl lg:text-5xl font-bold mb-8">Key Benefits of SLA Technology</h2>
//           </motion.div>

//           {/* Benefits Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">High Precision</h3>
//               <p className="text-gray-700">
//                 SLA technology allows for the creation of highly detailed parts with fine features, making it perfect for intricate molds and prototypes.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Smooth Surface Finish</h3>
//               <p className="text-gray-700">
//                 Parts produced with SLA have a superior surface finish, reducing the need for post-processing and making the parts ideal for high-quality molds.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
//               <p className="text-gray-700">
//                 SLA 3D printing can produce parts quickly, making it ideal for fast prototyping and reducing lead times in mold production.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Applications Section */}
//       <section className="max-w-5xl mx-auto py-16 px-5 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications of SLA Technology</h2>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
//             SLA technology is widely used in various industries, from prototyping and product design to dental, medical, and engineering applications.
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <motion.div
//             className="bg-gray-100 p-6 rounded-lg shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Automotive Prototyping</h3>
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
//             <h3 className="text-xl font-semibold mb-4">Medical Devices</h3>
//             <p className="text-gray-700">
//               SLA enables the production of highly accurate medical devices and models for testing, research, and development.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Gallery Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-5xl mx-auto px-5">
//           <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">Product Gallery</h2>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.img
//               src="/images/gallery/sla1.jpg"
//               className="rounded-lg shadow-lg object-cover"
//               alt="SLA Product 1"
//               whileHover={{ scale: 1.05 }}
//             />
//             <motion.img
//               src="/images/gallery/sla2.jpg"
//               className="rounded-lg shadow-lg object-cover"
//               alt="SLA Product 2"
//               whileHover={{ scale: 1.05 }}
//             />
//             <motion.img
//               src="/images/gallery/sla3.jpg"
//               className="rounded-lg shadow-lg object-cover"
//               alt="SLA Product 3"
//               whileHover={{ scale: 1.05 }}
//             />
//             {/* Add more product images as needed */}
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <motion.section
//         className="bg-custom-blue text-white py-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-5xl mx-auto px-5 text-center">
//           <h2 className="text-3xl lg:text-5xl font-bold mb-8">Want to Learn More About SLA?</h2>
//           <p className="text-lg md:text-xl lg:text-2xl mb-8">
//             Contact us today to discover how our SLA technology can revolutionize your production line.
//           </p>
//           <a
//             href="/contact"
//             className="bg-white text-custom-blue font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </motion.section>
//     </>
//   );
// };

// export default AboutSla;
'use client';
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// TypeScript interface for props (if any)
interface AboutSlaProps {}

const AboutSla: React.FC<AboutSlaProps> = () => {
  // Parallax effect for the hero section background
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[40rem] relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(/images/stock/sla-background.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div className="absolute inset-0" style={{ y: yOffset }}>
          <div className="hero-content text-center text-neutral-content flex justify-center items-center h-full">
            <div className="max-w-3xl mx-auto text-center px-4">
              <motion.h1
                className="text-white mb-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Stereolithography (SLA)
              </motion.h1>
              <p className="mt-4 text-white text-lg md:text-2xl lg:text-3xl font-light">
                Precision and Detail in 3D Printing
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SLA Technology Overview Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">What is SLA Technology?</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
            Stereolithography (SLA) is a 3D printing technology that uses a laser to solidify liquid resin into intricate, highly detailed parts. Ideal for producing precision molds and prototypes with smooth finishes.
          </p>
        </motion.div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Key Benefits of SLA Technology</h2>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { title: "High Precision", description: "Allows for highly detailed parts, perfect for intricate molds and prototypes." },
              { title: "Smooth Surface Finish", description: "Provides a superior surface finish, reducing post-processing needs." },
              { title: "Fast Turnaround", description: "Ideal for rapid prototyping and reducing lead times in mold production." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Applications of SLA Technology</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
            Widely used in prototyping, product design, dental, medical, and engineering applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Automotive Prototyping", description: "Detailed and functional prototypes for automotive parts, streamlining production." },
            { title: "Dental Applications", description: "Precise dental models and prosthetics for enhanced treatment accuracy." },
            { title: "Medical Devices", description: "Highly accurate devices and models for testing, research, and development." }
          ].map((app, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">Product Gallery</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.img
                key={i}
                src={`/images/gallery/sla${i + 1}.jpg`}
                className="rounded-lg shadow-lg object-cover w-full h-64"
                alt={`SLA Product ${i + 1}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
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
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Want to Learn More About SLA?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Contact us today to discover how our SLA technology can revolutionize your production line.
          </p>
          <a
            href="/contact"
            className="bg-white text-custom-blue font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </>
  );
};

export default AboutSla;

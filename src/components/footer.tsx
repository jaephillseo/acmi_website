// import Link from 'next/link'
// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-900">
//         <div className="mx-auto w-full max-w-2xl flex flex-col justify-center">
//           <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 items-right justify-items-center justify-center">
//             <div>
//               <h2 className="mb-6 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 uppercase">Company</h2>
//               <ul className="text-gray-500 font-medium">
//                 <li className="mb-4">
//                   <Link href="/about" className=" hover:underline">About</Link>
//                 </li>
//                 <li className="mb-4">
//                   <a href="/sustainability" className="hover:underline">Casting Mold</a>
//                 </li>
//                 <li className="mb-4">
//                   <a href="/sustainability" className="hover:underline">SLA Solutions</a>
//                 </li>
//                 <li className="mb-4">
//                   <a href="/sustainability" className="hover:underline">SLM Solutions</a>
//                 </li>
//                 <li className="mb-4">
//                   <a href="/contact-us" className="hover:underline">Contact Us</a>
//                 </li>
//               </ul>
//             </div>
            
//             <div className='col-span-2'>
//               <h2 className="mb-6 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 uppercase">Contact</h2>
//               <ul className="text-gray-500 font-medium">
//                 <li className="mb-4">
//                   <p className="hover:underline">Phone: +62 621-2915-9080</p>
//                 </li>
//                 <li className="mb-4">
//                   <p className="hover:underline">Email: support@acmi.co.id</p>
//                 </li>
//                 <li className="mb-4">
//                   <p className="hover:underline">Jl. Millennium Raya 3B, Blok H1, Millennium Industrial Estate</p>
//                   <p>Desa Peusar, Panongan, Tangerang, Banten</p>
//                   <p>Indonesia - 15710</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="px-4 py-6  md:flex md:items-center md:justify-center">
//             <span className="text-sm text-gray-300 sm:text-center">
//               ©2024 PT Anugrah Cipta Mould Indonesia. All Rights Reserved.
//             </span>
//           </div>
//         </div>
//       </footer>

//     </>
//   )
// }

// export default Footer
// 'use client';

//   import Link from 'next/link';
//   import React from 'react';
//   import { MapPin, Phone, Mail } from 'lucide-react';
  
//   const Footer = () => {
//     return (
//       <footer className="bg-gradient-to-b from-gray-900 to-gray-950">
//         <div className="mx-auto w-full max-w-7xl px-4 py-12">
//           <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-start">
//             {/* Company Section */}
//             <div className="space-y-6">
//               <h2 className="text-lg font-semibold text-gray-100 uppercase tracking-wider after:content-[''] after:block after:w-12 after:h-1 after:bg-gray-400 after:mt-2">
//                 Company
//               </h2>
//               <ul className="space-y-4 text-gray-400">
//                 <li>
//                   <Link 
//                     href="/about" 
//                     className="inline-block transition-colors hover:text-gray-100 hover:translate-x-1 duration-200"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href="/sustainability" 
//                     className="inline-block transition-colors hover:text-gray-100 hover:translate-x-1 duration-200"
//                   >
//                     Casting Mold
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href="/sustainability" 
//                     className="inline-block transition-colors hover:text-gray-100 hover:translate-x-1 duration-200"
//                   >
//                     SLA Solutions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href="/sustainability" 
//                     className="inline-block transition-colors hover:text-gray-100 hover:translate-x-1 duration-200"
//                   >
//                     SLM Solutions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href="/contact-us" 
//                     className="inline-block transition-colors hover:text-gray-100 hover:translate-x-1 duration-200"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
  
//             {/* Contact Section */}
//             <div className="col-span-2 space-y-6">
//               <h2 className="text-lg font-semibold text-gray-100 uppercase tracking-wider after:content-[''] after:block after:w-12 after:h-1 after:bg-gray-400 after:mt-2">
//                 Contact
//               </h2>
//               <ul className="space-y-6 text-gray-400">
//                 <li className="flex items-center space-x-3 group">
//                   <Phone className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
//                   <span className="group-hover:text-gray-300 transition-colors">+62 621-2915-9080</span>
//                 </li>
//                 <li className="flex items-center space-x-3 group">
//                   <Mail className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
//                   <span className="group-hover:text-gray-300 transition-colors">support@acmi.co.id</span>
//                 </li>
//                 <li className="flex space-x-3 group">
//                   <MapPin className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors flex-shrink-0 mt-1" />
//                   <div className="group-hover:text-gray-300 transition-colors">
//                     <p>Jl. Millennium Raya 3B, Blok H1, Millennium Industrial Estate</p>
//                     <p>Desa Peusar, Panongan, Tangerang, Banten</p>
//                     <p>Indonesia - 15710</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
  
//           {/* Copyright Section */}
//           <div className="mt-12 pt-8 border-t border-gray-800">
//             <p className="text-sm text-gray-400 text-center">
//               ©2024 PT Anugrah Cipta Mould Indonesia. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;

'use client';

import React from 'react';
import FooterCompanyLinks from './footer/FooterCompanyLinks';
import FooterContactInfo from './footer/FooterContactInfo';
import FooterCopyright from './footer/FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-start">
            <FooterCompanyLinks />
            <FooterContactInfo />
          </div>
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const FooterContactInfo = () => {
  return (
    <div className="col-span-2 space-y-6">
      <h2 className="text-lg font-semibold text-gray-100 uppercase tracking-wider after:content-[''] after:block after:w-12 after:h-1 after:bg-gray-400 after:mt-2">
        Contact
      </h2>
      <ul className="space-y-6 text-gray-400">
        <li className="flex items-center space-x-3 group">
          <Phone className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
          <span className="group-hover:text-gray-300 transition-colors">+62 621-2915-9080</span>
        </li>
        <li className="flex items-center space-x-3 group">
          <Mail className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
          <span className="group-hover:text-gray-300 transition-colors">support@acmi.co.id</span>
        </li>
        <li className="flex space-x-3 group">
          <MapPin className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors flex-shrink-0 mt-1" />
          <div className="group-hover:text-gray-300 transition-colors">
            <p>Jl. Millennium Raya 3B, Blok H1, Millennium Industrial Estate</p>
            <p>Desa Peusar, Panongan, Tangerang, Banten</p>
            <p>Indonesia - 15710</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterContactInfo;
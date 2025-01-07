
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
'use client';

    import Link from 'next/link';
    import React from 'react';
    
    const FooterCompanyLinks = () => {
      const links = [
        { href: '/about', label: 'About' },
        { href: '/sustainability', label: 'Casting Mold' },
        { href: '/sustainability', label: 'SLA Solutions' },
        { href: '/sustainability', label: 'SLM Solutions' },
        { href: '/contact-us', label: 'Contact Us' },
      ];
    
      return (
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-100 uppercase tracking-wider after:content-[''] after:block after:w-12 after:h-1 after:bg-gray-400 after:mt-2">
            Company
          </h2>
          <ul className="space-y-4 text-gray-400">
            {links.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className="inline-block transition-colors hover:text-gray-100 hover:translate-x-1 duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default FooterCompanyLinks;
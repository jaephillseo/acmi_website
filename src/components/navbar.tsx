'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [header, setHeader] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 20) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={`min-w-full top-0 z-50 ${header ? 'sticky bg-gray-900 shadow-lg' : 'absolute bg-transparent'} transition-all duration-300`}>
      <div className="navbar h-20 lg:h-24 px-4 lg:px-10">
        <div className="flex items-center">
          <Link href='/'>
            <Image
              src="/images/logo/ACMI_logo2.png"
              alt="ACMI Logo"
              width={150}
              height={150}
              className="myLogo max-w-none"
              style={{ width: '170px', height: '75px' }}
            />
          </Link>
        </div>

        {/* Large Screen Menu */}
        <div className="navbar-end flex-1 justify-end">
          <ul className="menu menu-horizontal font-semibold hidden lg:flex text-lg text-gray-100 space-x-6">
            <li className="hover:text-gray-400"><Link href='/'>Home</Link></li>
            <li className="hover:text-gray-400"><Link href='/about'>About Us</Link></li>
            <li className="hover:text-gray-400"><Link href='/Facilities'>Facilities</Link></li>
            <li className="hover:text-gray-400"><Link href='/sustainability'>Sustainability</Link></li>
            <li className="hover:text-gray-400"><Link href='/contact-us'>Contact Us</Link></li>
          </ul>

          {/* Small Screen Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost" onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-gray-800 rounded-box w-48 ${isDropdownOpen ? '' : 'hidden'}`}>
              <li onClick={closeDropdown} className="hover:bg-gray-700"><Link href='/'>Home</Link></li>
              <li onClick={closeDropdown} className="hover:bg-gray-700"><Link href='/about'>About Us</Link></li>
              <li onClick={closeDropdown} className="hover:bg-gray-700"><Link href='/facilities?branch=tangerang'>Facilities</Link></li>
              <li onClick={closeDropdown} className="hover:bg-gray-700"><Link href='/sustainability'>Sustainability</Link></li>
              <li onClick={closeDropdown} className="hover:bg-gray-700"><Link href='/contact-us'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
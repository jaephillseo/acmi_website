'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useScrollHeader } from './navbar/useScrollHeader';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isScrolled = useScrollHeader()

  
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={`min-w-full top-0 z-50 ${Headers ? 'sticky bg-gray-900 shadow-lg' : 'absolute bg-transparent'} transition-all duration-300`}>
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
            <li className="dropdown dropdown-hover relative"
              onClick={toggleDropdown}
              
              >
              <a tabIndex={0} className="hover:text-gray-400">
                Products and Services
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {isDropdownOpen && (
              <ul className="dropdown-content absolute left-0 mt-3 p-2 shadow-lg bg-gray-800 rounded-box w-48 space-y-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/casting'>Casting Mold</Link></li>
                <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/slm'>SLM</Link></li>
                <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/sla'>SLA</Link></li>
                <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/cnc'>CNC</Link></li>
                <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/moldtesting'>Mold Testing</Link></li>
                {/* <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/prototype'>Prototyping Services</Link></li>
                <li onClick={() => setIsDropdownOpen(false)} className="hover:bg-gray-700"><Link href='/sla'>Customized Mold Solutions</Link></li> */}
              </ul>
              )}
            </li>
            <li className="hover:text-gray-400"><Link href='/machineries'>Machineries</Link></li>
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
              <li className="dropdown dropdown-hover relative">
                <a tabIndex={0} className="hover:bg-gray-700">
                  Technology
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul className="dropdown-content absolute left-0 mt-3 p-2 shadow-lg bg-gray-800 rounded-box w-48 space-y-2">
                  <li className="hover:bg-gray-700"><Link href='/casting-mold'>Casting Mold</Link></li>
                  <li className="hover:bg-gray-700"><Link href='/slm'>SLM</Link></li>
                  <li className="hover:bg-gray-700"><Link href='/sla'>SLA</Link></li>
                </ul>
              </li>
              <li onClick={closeDropdown} className="hover:bg-gray-700"><Link href='/contact-us'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

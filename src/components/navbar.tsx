'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

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

    window.addEventListener('scroll', scrollHeader);

    const handleScroll = (event: Event) => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={header ? "sticky min-w-full top-0 z-50 start-0" : "absolute min-w-full top-0 z-50 start-0"}>
      <div className="navbar backdrop-filter  bg-black backdrop-brightness-110 bg-opacity-60 h-24 lg:h-28 px-6 lg:px-12">
        <div className="pl-4 flex items-center">
          <Link href='/'>
            <Image
              src={"/images/logo/ACMI-logo.png"}
              alt="ACMI Logo"
              width={200}
              height={200}
              className="myLogo max-w-none"
              style={{width: '100px', height: '100px'}}
            />
          </Link>
        </div>
        {/* On Large */}
        <div className="navbar-end flex-1 justify-end">
          <ul className="menu menu-horizontal font-semibold hidden lg:flex text-xl text-base-200">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li><Link href='/Facilities'>Facilities</Link></li>
            <li><Link href='/sustainability'>Sustainability</Link></li>
            <li><Link href='/contact-us'>Contact Us</Link></li>
          </ul>
          {/* On Small */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} className="btn btn-ghost" onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isDropdownOpen ? 'dropdown-content-enter': 'hidden'}`}>
              <li onClick={closeDropdown}><Link href='/'>Home</Link></li>
              <li onClick={closeDropdown}><Link href='/about'>About Us</Link></li>
              <li onClick={closeDropdown}><Link href='/facilities?branch=tangerang'>Our Facilities</Link></li>
              <li onClick={closeDropdown}><Link href='/sustainability'>Sustainability</Link></li>
              <li onClick={closeDropdown}><Link href='/contact-us'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

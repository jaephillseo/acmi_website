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
      <div className="navbar backdrop-filter backdrop-blur-lg backdrop-brightness-125 bg-opacity-90">
        <div className="">
          <Link href='/'>
            <Image
              src={"/images/logo/hsk_logo.png"}
              alt="HSK Logo"
              width={95}
              height={50}
              className="myLogo"
            />
          </Link>
        </div>
        {/* On Large */}
        <div className="navbar-end flex-1 justify-end">
          <ul className="menu menu-horizontal font-semibold hidden lg:flex text-xl">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li className="dropdown">
              <div tabIndex={0} className="cursor-pointer" onClick={toggleDropdown}>
                Our Facilities
                <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul tabIndex={0} className={`dropdown-content text-lg menu p-2 shadow bg-base-300 rounded-box w-52 ${isDropdownOpen ? 'dropdown-content-enter': 'hidden'}`}>
                  <li><Link href="/facilities?branch=tangerang">HSK Tangerang</Link></li>
                  <li><Link href="/facilities?branch=jepara">HSK Jepara</Link></li>
                  <li><Link href="/facilities?branch=rembang">HSK Rembang</Link></li>
                </ul>
              )}
            </li>
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

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
            <li className="dropdown dropdown-hover relative">
              <a tabIndex={0} className="hover:text-gray-400">
                Products and Services
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <ul className="dropdown-content absolute left-0 mt-3 p-2 shadow-lg bg-gray-800 rounded-box w-48 space-y-2">
                <li className="hover:bg-gray-700"><Link href='/casting'>Casting Mold</Link></li>
                <li className="hover:bg-gray-700"><Link href='/slm'>SLM</Link></li>
                <li className="hover:bg-gray-700"><Link href='/sla'>SLA</Link></li>
                <li className="hover:bg-gray-700"><Link href='/prototype'>Prototyping Services</Link></li>
                <li className="hover:bg-gray-700"><Link href='/sla'>Customized Mold Solutions</Link></li>
              </ul>
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
// 'use client'

// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import '../styles/navbar.css';

// const NavBar = () => {
//   const [header, setHeader] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const scrollHeader = () => {
//       setHeader(window.scrollY >= 20);
//     };

//     const handleScroll = () => {
//       if (isDropdownOpen) {
//         setIsDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', scrollHeader);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', scrollHeader);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isDropdownOpen]);

//   const ProductsDropdown = () => (
//     <ul className="dropdown-content absolute left-0 mt-3 p-2 shadow-lg bg-gray-800/95 rounded-box w-52 space-y-2 backdrop-blur-sm">
//       <li className="nav-dropdown-item"><Link href='/casting'>Casting Mold</Link></li>
//       <li className="nav-dropdown-item"><Link href='/slm'>SLM</Link></li>
//       <li className="nav-dropdown-item"><Link href='/sla'>SLA</Link></li>
//       <li className="nav-dropdown-item"><Link href='/prototype'>Prototyping Services</Link></li>
//       <li className="nav-dropdown-item"><Link href='/sla'>Customized Mold Solutions</Link></li>
//     </ul>
//   );

//   return (
//     <nav className={`navbar-container ${header ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-content">
//         <div className="navbar-logo">
//           <Link href='/'>
//             <Image
//               src="/images/logo/ACMI_logo2.png"
//               alt="ACMI Logo"
//               width={170}
//               height={75}
//               className="logo-image"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="navbar-menu">
//           <ul className="desktop-menu">
//             <li className="nav-item"><Link href='/'>Home</Link></li>
//             <li className="nav-item"><Link href='/about'>About Us</Link></li>
//             <li className="nav-item dropdown">
//               <span className="dropdown-trigger">
//                 Products and Services
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="dropdown-arrow">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </span>
//               <ProductsDropdown />
//             </li>
//             <li className="nav-item"><Link href='/machineries'>Machineries</Link></li>
//             <li className="nav-item"><Link href='/contact-us'>Contact Us</Link></li>
//           </ul>

//           {/* Mobile Menu */}
//           <div className="mobile-menu-container">
//             <button 
//               className="mobile-menu-trigger"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               aria-label="Toggle menu"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-100">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//             <ul className={`mobile-menu ${isDropdownOpen ? 'show' : ''}`}>
//               <li onClick={() => setIsDropdownOpen(false)}><Link href='/'>Home</Link></li>
//               <li onClick={() => setIsDropdownOpen(false)}><Link href='/about'>About Us</Link></li>
//               <li className="mobile-dropdown">
//                 <span>Products and Services</span>
//                 <ul className="mobile-submenu">
//                   <li onClick={() => setIsDropdownOpen(false)}><Link href='/casting'>Casting Mold</Link></li>
//                   <li onClick={() => setIsDropdownOpen(false)}><Link href='/slm'>SLM</Link></li>
//                   <li onClick={() => setIsDropdownOpen(false)}><Link href='/sla'>SLA</Link></li>
//                   <li onClick={() => setIsDropdownOpen(false)}><Link href='/prototype'>Prototyping Services</Link></li>
//                   <li onClick={() => setIsDropdownOpen(false)}><Link href='/sla'>Customized Mold Solutions</Link></li>
//                 </ul>
//               </li>
//               <li onClick={() => setIsDropdownOpen(false)}><Link href='/machineries'>Machineries</Link></li>
//               <li onClick={() => setIsDropdownOpen(false)}><Link href='/contact-us'>Contact Us</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

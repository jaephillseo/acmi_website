import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 uppercase">Company</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/about" className=" hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <a href="/sustainability" className="hover:underline">Sustainability</a>
                </li>
                <li className="mb-4">
                  <a href="/contact-us" className="hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 uppercase">Branches</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/facilities?branch=tangerang" className="hover:underline">Tangerang</a>
                </li>
                <li className="mb-4">
                  <a href="/facilities?branch=jepara" className="hover:underline">Jepara</a>
                </li>
                <li className="mb-4">
                  <a href="/facilities?branch=rembang" className="hover:underline">Rembang</a>
                </li>
              </ul>
            </div>
            <div className='col-span-2'>
              <h2 className="mb-6 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 uppercase">Contact</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <p className="hover:underline">Phone: +62 621-2915-9080</p>
                </li>
                <li className="mb-4">
                  <p className="hover:underline">Email: support@hsk.co.id</p>
                </li>
                <li className="mb-4">
                  <p className="hover:underline">Jl. Millennium Raya 3B, Blok H1, Millennium Industrial Estate</p>
                  <p>Desa Peusar, Panongan, Tangerang, Banten</p>
                  <p>Indonesia - 15710</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6  md:flex md:items-center md:justify-center">
            <span className="text-sm text-gray-300 sm:text-center">
              ©2023 PT Handal Sukses Karya. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
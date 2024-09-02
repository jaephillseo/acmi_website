"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import Tangerang from "./tangerang";
import Jepara from "./jepara";
import Rembang from "./rembang";

import "../../styles/typed-custom.css";

const Facilities = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const branch = searchParams.branch || "tangerang";

  const isActive = (btnBranch: string) => branch === btnBranch;

  const cardBaseClass = `transition duration-300 ease-in-out mx-4 my-2 bg-custom-blue rounded-lg md:rounded-xl overflow-hidden shadow-lg`;
  const cardActiveClass = `bg-custom-blue`; // Active state class
  const cardInactiveClass = `bg-cyan-500`; // Inactive state class

  const cardClass = (btnBranch: string) =>
    `${cardBaseClass} 
    w-52 sm:w-64 md:w-64 lg:w-86 glass
    
    ${isActive(btnBranch) ? cardActiveClass : cardInactiveClass} `;

  const typedTarget = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: ["Innovation, Efficiency, Precision: Our Facilities' Promise"],
      typeSpeed: 35,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem]"
        style={{
          backgroundImage: "url(/images/factory-photo/HSKR_Internal_001.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
              Our Facilities
            </h1>
            <div className="typed-container">
              <p
                ref={typedTarget}
                className="text-sm md:mt-3 lg:mt-5 md:text-xl lg:text-2xl italic"
              ></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-justify justify-center bg-auto">
        <div className="max-w-5xl">
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold mt-10">
              Facilities
            </h2>
          </div>
          <div className="flex sm:flex-col md:flex-row lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center lg:space-y-0 lg:space-x-10 mt-4">
            <Link href={`?branch=tangerang`}>
              <div className={cardClass("tangerang")}>
                <div className="card-body p-1.5 md:p-2 lg:p-3 xl:p-4 text-center items-center">
                  <h2 className="card-title text-base md:text-lg lg:text-xl justify-center text-white">
                    HSK Tangerang
                  </h2>
                </div>
              </div>
            </Link>
            <Link href={`?branch=jepara`}>
              <div className={cardClass("jepara")}>
                <div className="card-body p-1.5 md:p-2 lg:p-3 xl:p-4 text-center items-center">
                  <h2 className="card-title text-base md:text-lg lg:text-xl justify-center text-white">
                    HSK Jepara
                  </h2>
                </div>
              </div>
            </Link>
            <Link href={`?branch=rembang`}>
              <div className={cardClass("rembang")}>
                <div className="card-body p-1.5 md:p-2 lg:p-3 xl:p-4 text-center items-center">
                  <h2 className="card-title text-base md:text-lg lg:text-xl justify-center text-white">
                    HSK Rembang
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {branch === "tangerang" && <Tangerang />}
      {branch === "jepara" && <Jepara />}
      {branch === "rembang" && <Rembang />}
    </>
  );
};

export default Facilities;

'use client'
import React, { useEffect, useRef } from "react";
import CardTextIcon from "@/components/cardtexticon";
import TimelineItem from "@/components/timelineItem";
import timelineData from "../../../constants/timelineConstants";
import { motion } from "framer-motion";

import "../../styles/typed-custom.css";
import "../../styles/card.css";

const AboutUs = () => {

  return (
    <>
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(/images/stock/design1.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 z-10">
          <div className="w-full h-full flex justify-center items-center animate-pulse">
            <svg
              className="w-20 h-20 text-yellow-500 opacity-50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2a1 1 0 011 1v18a1 1 0 01-2 0V3a1 1 0 011-1zM4.928 7.07a1 1 0 011.415 0l12.727 12.728a1 1 0 01-1.414 1.414L4.929 8.485a1 1 0 010-1.414z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="hero-overlay bg-opacity-60 z-20"></div>
        <div className="hero-content text-left text-neutral-content z-30">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl text-base-300 md:text-5xl lg:text-7xl font-bold tracking-wider">
              About Us
            </h1>
            <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide">
              Discover our journey and our values
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
        {/* Left Side Image */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/stock/design1.jpg"
            alt="Mission Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
            Mission
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
              Our Mission
            </span>
          </h2>
          <blockquote className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
            <br />
            <motion.ul
              className="list-disc ml-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <li>
                <b>Excellence in Product:</b> Offering only the highest
                quality products that echo our dedication to craftsmanship and
                innovation.
              </li>
              <li>
                <b>Dedication to Service:</b> Ensuring that our services
                aren't just transactional, but transformative experiences that
                foster long-term relationships.
              </li>
              <li>
                <b>Meeting Diverse Needs:</b> We adapt our offerings to suit
                the unique and diverse needs of our global customers,
                ensuring satisfaction at every stage.
              </li>
            </motion.ul>
          </blockquote>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-auto my-12 lg:my-24">
        {/* Left Side Image */}


        {/* Right Side Content */}
        <motion.div
          className="lg:w-1/2 w-full px-5 lg:px-12 py-8 lg:py-0 text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold relative inline-block mb-6 lg:mb-10">
            Vision
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-5xl lg:text-7xl text-gray-200 -z-10">
              Our Vision
            </span>
          </h2>
          <blockquote className="text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900">
            <br />
            <motion.ul
              className="list-disc ml-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <li>
                Our vision is to be recognized as a{" "}
                <em>model of excellence in our industry</em>, consistently
                surpassing customer expectations with{" "}
                <b>superior quality and prompt solutions</b>. Our journey is
                characterized by{" "}
                <em>continuous innovation and professionalism</em>, striving to
                redefine industry benchmarks.
              </li>
            </motion.ul>
          </blockquote>
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/stock/design1.jpg"
            alt="Vision Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
      {/* <div className="flex text-justify justify-center bg-auto my-12 lg:my-24">
        <div className="max w-5xl px-5">
          <div className="flex justify-center text-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-center underline underline-offset-4 decoration-custom-blue decoration-2 mb-5">Key Milestones</h2>
              <TimelineItem items={timelineData} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutUs;

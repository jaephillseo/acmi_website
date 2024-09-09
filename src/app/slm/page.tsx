'use client'
import React, { useEffect, useRef } from "react";
import CardTextIcon from "@/components/cardtexticon";
import TimelineItem from "@/components/timelineItem";
import timelineData from "../../../constants/timelineConstants";
import { motion } from "framer-motion";

import "../../styles/typed-custom.css";
import "../../styles/card.css";

const AboutSlm = () => {

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
        <div className="hero-overlay bg-opacity-60 z-20"></div>
        <div className="hero-content text-left text-neutral-content z-30">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl text-base-300 md:text-5xl lg:text-7xl font-bold tracking-wider">
              SLM
            </h1>
            <p className="text-base-300 text-lg md:text-2xl lg:text-3xl font-light tracking-wide">
              
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis. 
                Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet. Ut sem enim, ornare in tortor et, varius euismod sapien. 
                Suspendisse ornare, velit non dapibus ornare, lectus nibh blandit mi, fringilla porttitor tellus tortor eu felis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis. 
                Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet. Ut sem enim, ornare in tortor et, varius euismod sapien. 
                Suspendisse ornare, velit non dapibus ornare, lectus nibh blandit mi, fringilla porttitor tellus tortor eu felis.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis nisl semper sagittis. 
                Duis ultricies pulvinar urna, sed tristique massa pulvinar sit amet. Ut sem enim, ornare in tortor et, varius euismod sapien. 
                Suspendisse ornare, velit non dapibus ornare, lectus nibh blandit mi, fringilla porttitor tellus tortor eu felis.
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

    </>
  );
};

export default AboutSlm;

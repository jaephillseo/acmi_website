
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card";
import CarouselCard from "@/components/carouselcard";
import CarouselHero from "@/components/carouselhero";
import ImageOverlay from "@/components/imageoverlay";
import AutoScroller from "@/components/autoscroll";
import CarouselImage from "@/components/carouselimage";
import "../styles/buttons.css";

import {
  locationsData,
  servicesData,
  partnersData,
  approvedBrands,
  materialPartners,
} from "../../constants/homeConstants";
import SectionHeader from "@/components/sectionheader";

const Home = () => {
  const carouselImages: string[] = [
    "/images/factory-photo/DJI_0015e.jpg",
    "/images/factory-photo/DJI_0011e.jpg",
  ];

  return (
    <>
      <CarouselHero contentImage={carouselImages} />
      <SectionHeader text="About Us" />
      <div className="flex flex-col items-center justify-center text-gray-300 mt-4 md:mt-6 lg:mt-12">
        <div className="max-w-5xl px-5 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-left">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="text-base md:text-lg lg:text-xl mt-4 mb-10 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et elit orci. Quisque ut urna at dui tristique cursus sed ut lorem. Fusce tellus ligula, volutpat tincidunt mollis id, semper vitae neque.
          </p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white mt-2 text-left">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="text-base md:text-lg lg:text-xl mt-4 mb-10 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et elit orci. Quisque ut urna at dui tristique cursus sed ut lorem. Fusce tellus ligula, volutpat tincidunt mollis id, semper vitae neque.
          </p>

          <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white mt-2 text-left">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="text-base md:text-lg lg:text-xl mt-4 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et elit orci. Quisque ut urna at dui tristique cursus sed ut lorem. 
          Fusce tellus ligula, volutpat tincidunt mollis id, semper vitae neque. Quisque hendrerit varius lacus eu commodo. Proin gravida et nulla vitae pretium. 
          Vivamus eget nulla ut lacus varius lobortis vitae nec massa. Sed mattis sit amet odio sit amet molestie. Nulla facilisi. 
          Suspendisse vitae scelerisque est, in ultrices purus. Nam sed lacus sit amet eros rutrum tempus.
          Pellentesque scelerisque, metus quis convallis fringilla, libero orci fermentum urna, eu elementum sem nulla eu enim.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/about" className="btn-neumorphic mt-4 bg-custom-blue">
              <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                Lorem ipsum dolor sit amet.
              </span>
            </Link>
          </div>
        </div>
      </div>
      
    <SectionHeader text="Contact Us" />
      <div className="flex text-justify justify-center text-gray-300 my-10">
        <div className="max-w-5xl px-5">
          <div className="flex flex-row lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="text-left text-base md:text-lg lg:text-xl mt-0 lg:mt-0">
              <div className="px-4">
                <p>
                  PT Handal Sukses Karya thrives on collaborative spirit. Our
                  approach extends beyond the typical corporate boundaries,
                  embracing all who take an interest in our offerings,
                  knowledge, or collaboration opportunities. We're committed to
                  collective progress and value open dialogue, where every query
                  or suggestion is a stepping stone to excellence.{" "}
                  <b>
                    Let's start a conversation and explore possibilities
                    together
                  </b>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-20">
            <Link
              href="/contact-us"
              className="mt-4 btn-neumorphic bg-custom-blue"
            >
              <p className="font-semibold text-white text-base md:text-lg lg:text-xl">
                Collaborate With Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

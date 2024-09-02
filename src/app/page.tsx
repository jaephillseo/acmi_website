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
    "/images/factory-photo/HSKJ_001.jpg",
    "/images/factory-photo/HSKJ_004_comp.jpg",
    "/images/factory-photo/HSKR_001_comp.jpg",
    "/images/factory-photo/HSKR_002_comp.jpg",
    "/images/factory-photo/HSKT_001.jpg",
  ];

  return (
    <>
      <CarouselHero contentImage={carouselImages} />
      <SectionHeader text="About Us" />
      <div className="flex flex-col items-center justify-center bg-auto mt-4 md:mt-6 lg:mt-12">
        <div className="max-w-5xl px-5 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 text-left">
            Innovating the Ground We Walk On
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-900 mt-4 mb-10 text-left">
            Established in 2012, HSK has been at the forefront of the{" "}
            <strong>footwear component industry</strong>, dedicated to{" "}
            <strong>innovation</strong> and <strong>quality</strong>. Our
            state-of-the-art EVA midsoles are a testament to our <em>craftsmanship
            and commitment</em> to advancing the industry standards.
          </p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 text-left">
            Sculpting the Future of Footwear
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-900 mt-4 mb-10 text-left">
            From <strong>Tangerang</strong> to <strong>Jepara</strong> and{" "}
            <strong>Rembang</strong>, our production sites are <em>hubs of
            technological advancement and creativity</em>, producing{" "}
            <strong>unparalleled quality</strong> that steps beyond the
            conventional. With sustainable practices and a continuous pursuit of
            perfection, we ensure that every product is a step ahead.
          </p>

          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 text-left">
            From Foundation to Phenomenon
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-900 mt-4 text-left">
            Our <b>growth trajectory</b> since 2012 has been{" "}
            <em>nothing short of remarkable</em>. Originally starting with the
            capacity to produce <em>1 million pairs</em> of EVA midsoles monthly,
            HSK has expanded rapidly to a staggering{" "}
            <b>7 million pairs per month</b>. This significant increase not only{" "}
            <em>cements our status</em> as the country's{" "}
            leading EVA midsole supplier but also highlights our
            commitment to scaling operations while maintaining the{" "}
            <em>highest standards</em> of quality and innovation.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/about" className="btn-neumorphic mt-4 bg-custom-blue">
              <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                Discover Our Story
              </span>
            </Link>
          </div>
        </div>
      </div>
      <SectionHeader text="Our Locations" />
      <div className="flex flex-col justify-center bg-auto mt-4 md:mt-6 lg:mt-12 items-center">
        {/* Desktop View */}
        <div className="max-w-5xl px-5 lg:flex flex-row space-x-4 items-stretch justify-center hidden md:flex show-in-landscape">
          {locationsData.map((item: cardData, index: number) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))}
        </div>
        {/* Mobile View */}
        <div className="px:4 sm:px-6 md:px-8 w-full h-full md:hidden lg:hidden items-stretch hide-in-landscape">
          <CarouselCard data={locationsData} />
        </div>
      </div>
      <SectionHeader text="Our Services" />
      <div className="flex flex-col items-center justify-center bg-auto mt-4 md:mt-6 lg:mt-12">
        {/* Desktop View */}
        <div className="max-w-5xl px-5 md:flex lg:flex flex-row space-x-4 items-stretch justify-center hidden show-in-landscape">
          {servicesData.map((item: servicesData, index: number) => (
            <div key={index}>
              <ImageOverlay item={item} />
            </div>
          ))}
        </div>
        {/* Mobile View */}
        <div className="px:4 sm:px-6 md:px-8 w-full md:hidden lg:hidden hide-in-landscape flex justify-center">
          <CarouselImage data={servicesData} />
        </div>
      </div>
      <SectionHeader text="Partnerships" />
      <div className="mt-8">
        <div className="flex items-center justify-center">
          <span className="text-lg lg:text-3xl font-bold">
            Business Partners
          </span>
        </div>
        <div className="mt-2">
          <AutoScroller images={partnersData} />
        </div>
        <div className="flex items-center justify-center mt-12">
          <span className="text-lg lg:text-3xl font-bold">Approved Brands</span>
        </div>
        <div className="mt-2">
          <AutoScroller images={approvedBrands} />
        </div>
        <div className="flex items-center justify-center mt-12">
          <span className="text-lg lg:text-3xl font-bold">
            Material Partners
          </span>
        </div>
        <div className="mt-2">
          <AutoScroller images={materialPartners} />
        </div>
      </div>
      <SectionHeader text="Sustainability" />
      <div className="flex text-justify justify-center bg-auto mt-8">
        <div className="max-w-5xl px-5">
          <blockquote className="mt-0">
            <p className="text-base md:text-xl lg:text-2xl italic font-medium text-center text-gray-900">
              "Our commitment to sustainability is woven into our promise to the
              future generation and the environment. We prioritize eco-friendly
              initiatives and aim to surpass industry standards, setting new
              benchmarks for sustainable business practices."
            </p>
          </blockquote>
          <div className="flex text-justify justify-center mt-10">
            <Link
              href="/sustainability"
              className="btn-neumorphic bg-custom-blue "
            >
              <p className="font-semibold text-white text-base md:text:lg lg:text-xl">
                Find out More
              </p>
            </Link>
          </div>
        </div>
      </div>
      <SectionHeader text="Contact Us" />
      <div className="flex text-justify justify-center bg-auto my-10">
        <div className="max-w-5xl px-5">
          <div className="flex flex-row lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="text-left text-base md:text-lg lg:text-xl text-gray-900 mt-0 lg:mt-0">
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
                {/* <p className="mt-4 text-center font-semibold text-base md:text-lg lg:text-xl">
                  Together, let's transform possibilities into impactful
                  outcomes.
                </p>
                <br /> */}
              </div>
            </div>
          </div>
          <div
            className="flex justify-center mt-10 mb-20
          "
          >
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

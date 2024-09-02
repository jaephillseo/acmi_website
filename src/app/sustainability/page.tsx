"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";

import "../../styles/typed-custom.css";

const Sustainability = () => {
  const typedTarget = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typedTarget.current) {
      const typed = new Typed(typedTarget.current, {
        strings: [
          "Crafting quality with care for the planet—every EVA component reflects our green commitment.",
        ],
        typeSpeed: 35,
        backSpeed: 50,
        loop: false,
        showCursor: false,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div
        className="hero h-[24rem] md:h-[36rem] lg:h-[36rem]"
        style={{ backgroundImage: "url(/images/stock/solar_plant.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
              Sustainability
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

      <div className="flex flex-row-reverse text-justify justify-center h-fit">
        <div className="max-w-6xl px-5 m-auto py-5 my-6">
          <div className="flex flex-row flex-wrap lg:flex-nowrap space-x-5 lg:space-x-10 justify-center">
            <div className="relative aspect-video lg:aspect-[3/4] h-36 md:h-56 lg:h-[26rem] sm:md:my-4">
              <Image
                src="/images/stock/solar_panel_001.jpg"
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex flex-col sm:md:items-center justify-center leading-relaxed">
              <blockquote className="text-left space-y-6">
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <h2 className="text-xl lg:text-4xl font-semibold text-center underline decoration-yellow-300 underline-offset-4">
                    Reducing Carbon Footprint
                  </h2>
                </div>
                <p className="text-base lg:text-xl leading-relaxed text-left">
                  Steadfast in our commitment to lead the footwear industry in
                  environmental stewardship, we are thrilled to announce a
                  groundbreaking partnership with <b>PT. Solarion</b> to
                  implement cutting-edge rooftop solar panels at our HSK Rembang
                  and HSK Jepara facilities, boasting capacities of{" "}
                  <b>1,400 KWp</b> and <b>1,100 KWp</b>, respectively.
                </p>
                <p className="text-base lg:text-xl leading-relaxed text-left">
                  More than mere power sources, these installations signify our
                  dedication to a <b>greener future</b> and a significant
                  reduction in our reliance on non-renewable energy. Set for
                  completion by April 2024, this initiative goes beyond energy
                  savings; it is a testament to our unwavering commitment to
                  minimize the <b>carbon footprint</b> associated with midsole
                  production.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse text-justify justify-center bg-white-200 h-fit">
        <div className="max-w-6xl px-5 m-auto py-5 my-6">
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap space-x-5 lg:space-x-10 justify-center">
            <div className="relative aspect-video lg:aspect-[3/4] h-36 md:h-56 lg:h-[26rem] sm:md:my-4">
              <Image
                src="/images/factory-materials/biocompound.jpg"
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex flex-col sm:md:items-center justify-center leading-relaxed">
              <blockquote className="space-y-6">
                <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                  <h2 className="text-xl lg:text-4xl text-center font-semibold underline decoration-green-500 underline-offset-8">
                    Bio-Based Material
                  </h2>
                </div>
                <p className="text-base lg:text-xl leading-relaxed text-left">
                  Beyond traditional recycling and waste reduction, our
                  commitment to <b>sustainability</b> propels us into exploring
                  innovative solutions like integrating bio-based materials into
                  our compounds, with successes like the adoption of{" "}
                  <b>Braskem</b> for mass production.
                </p>
                <p className="text-base lg:text-xl leading-relaxed text-left">
                  Our journey towards sustainability is dynamic, marked by
                  ongoing research and development to uncover and implement new{" "}
                  <b>eco-friendly alternatives</b>. We persistently challenge
                  conventions, striving to redefine possibilities in{" "}
                  <b>sustainable materials</b> for the footwear industry,
                  weaving sustainability into the very fabric of our operations.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse text-justify justify-center h-fit">
        <div className="max-w-6xl px-5 m-auto py-5 my-6">
          <div className="flex flex-row flex-wrap lg:flex-nowrap space-x-5 lg:space-x-10 justify-center items-center">
            <div className="relative aspect-video lg:aspect-[3/4] h-36 md:h-56 lg:h-[26rem] sm:md:my-4">
              <Image
                src="/images/factory-machines/eva_recycle_001.jpeg"
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex flex-col sm:md:items-center justify-center leading-relaxed mb-24">
              <blockquote className="mt-4 text-left space-y-6">
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <h2 className="text-xl lg:text-4xl text-center justify-center font-semibold underline decoration-teal-600 underline-offset-8">
                    EVA Recycling
                  </h2>
                </div>
                <p className="text-base lg:text-xl leading-relaxed text-left">
                  Our <b>EVA recycling facility</b>, conveniently located in the
                  Kudus area, is equipped to process rejected parts and EVA
                  waste, transforming them into{" "}
                  <b>eco-friendly recycled EVA sheets</b>. Choosing our recycled
                  EVA sheets brings multiple advantages: they efficiently serve
                  as valuable fillers in virgin EVA compounds, optimizing
                  product performance; our recycling process ensures uniform
                  distribution of materials within the compound, guaranteeing{" "}
                  <b>consistent quality</b>; and our commitment to
                  sustainability is evident through a dust-free and
                  environmentally conscious recycling process .
                </p>
                <p className="text-base lg:text-xl leading-relaxed text-left">
                  Currently, we operate a single production line with a total
                  capacity of <b>110 tons per month</b>, ensuring a steady
                  supply of high-quality recycled EVA sheets to meet your needs.
                  We are dedicated to sustainability and actively work towards{" "}
                  reducing and reusing the waste we generate, aligning with our
                  mission for a <b>greener tomorrow</b>.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sustainability;

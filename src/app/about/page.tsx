import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import CardTextIcon from "@/components/cardtexticon";
import TimelineItem from "@/components/timelineItem";
import timelineData from "../../../constants/timelineConstants";

import "../../styles/typed-custom.css";
import "../../styles/card.css";

const AboutUs = () => {
  const typedTarget = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Only initialize Typed if the ref is not null
    if (typedTarget.current) {
      const typed = new Typed(typedTarget.current, {
        strings: ["Beyond Footwear: We're Building a Legacy of Quality"],
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
        style={{
          backgroundImage:
            "url(/images/factory-photo/HSKJ_Internal_001_comp.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
              About Us
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
      <div className="flex flex-row-reverse text-justify justify-center bg-auto my-12 lg:my-24">
        <div className="max-w-5xl px-5">
          <div className="flex flex-row flex-wrap lg:flex-nowrap space-y-5 lg:space-y-0 space-x-5 lg:space-x-10 justify-center">
            <div className="flex flex-col sm:md:items-center justify-center leading-relaxed">
              <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left underline underline-offset-4 decoration-custom-blue decoration-2 mb-10">
                Vision
              </h2>
              <blockquote className="text-left text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900 ml-1">
                <p>
                  Our vision is to be recognized as a{" "}
                  <em>model of excellence in our industry</em>, consistently
                  surpassing customer expectations with{" "}
                  <b>superior quality and prompt solutions</b>. Our journey is
                  characterized by{" "}
                  <em>continuous innovation and professionalism</em>, striving
                  to redefine industry benchmarks.
                </p>
                <br />

                <p>
                  Fueled by a <b>deep passion and expert knowledge</b>, we are
                  committed to navigating and mastering challenges through{" "}
                  <em>creative strategies and adept execution</em>. Our goal
                  extends beyond achieving success; it encompasses{" "}
                  <em>setting new standards and leading by example</em>, merging
                  time-honored principles with modern insights to not only
                  fulfill but <b>revolutionize market expectations</b>.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-justify justify-center bg-auto my-12 lg:my-24">
        <div className="max-w-5xl px-5">
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap space-y-5 lg:space-y-0 items-center justify-center">
            <div className="flex flex-col sm:md:items-center justify-center leading-relaxed">
              <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left underline underline-offset-4 decoration-custom-blue decoration-2 mb-10">
                Mission
              </h2>
              <blockquote className="text-left text-base leading-relaxed md:text-xl lg:text-2xl font-medium text-gray-900 ml-1">
                <p>
                  Our mission is to reach the zenith of the footwear component
                  industry, establishing standards that become the benchmark for
                  others.
                </p>
                <p>
                  In pursuit of this mission, we adhere to <em>three fundamental
                  principles</em>:
                </p>
                <br />
                <ul className="list-disc ml-8">
                  <li>
                    <b>Excellence in Product:</b> Offering only the highest
                    quality products that echo our dedication to craftsmanship
                    and innovation
                  </li>
                  <li>
                    <b>Dedication to Service:</b> Ensuring that our services
                    aren't just transactional, but transformative experiences
                    that foster long-term relationships.
                  </li>
                  <li>
                    <b>Meeting Diverse Needs:</b> We adapt our offerings to suit
                    each unique and diverse needs of our global customers,
                    ensuring satisfaction at every stage.
                  </li>
                </ul>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-justify justify-center bg-auto my-12 lg:my-24">
        <div className="max-w-5xl px-5">
          <div className="flex justify-center text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left underline underline-offset-4 decoration-custom-blue decoration-2 mb-5">
              Our Values
            </h2>
          </div>
          <div className="flex flex-row flex-wrap gap-8 items-center justify-center mt-12">
            <CardTextIcon
              title="Integrity"
              text="Maintaining honesty and ethical standards."
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.351 3.063-8-3a1.009 1.009 0 0 0-.7 0l-8 3A1 1 0 0 0 0 4a19.394 19.394 0 0 0 8.47 15.848 1 1 0 0 0 1.06 0A19.394 19.394 0 0 0 18 4a1 1 0 0 0-.649-.937Zm-3.644 4.644-5 5A1 1 0 0 1 8 13c-.033 0-.065 0-.1-.005a1 1 0 0 1-.733-.44l-2-3a1 1 0 0 1 1.664-1.11l1.323 1.986 4.138-4.138a1 1 0 0 1 1.414 1.414h.001Z" />
              </svg>
            </CardTextIcon>
            <CardTextIcon
              title="Winner's Mindset"
              text="Constantly pursuing success and triumph."
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                />
              </svg>
            </CardTextIcon>
            <CardTextIcon
              title="Innovation & Originality"
              text="Offering new and unique approaches"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 20"
              >
                <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z" />
              </svg>
            </CardTextIcon>
            <CardTextIcon
              title="Ongoing Achievement"
              text="Guaranteeing sustained success and growth."
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8.806 5.614-4.251.362-2.244 2.243a1.058 1.058 0 0 0 .6 1.8l3.036.356m9.439 1.819-.362 4.25-2.243 2.245a1.059 1.059 0 0 1-1.795-.6l-.449-2.983m9.187-12.57a1.536 1.536 0 0 0-1.26-1.26c-1.818-.313-5.52-.7-7.179.96-1.88 1.88-5.863 9.016-7.1 11.275a1.05 1.05 0 0 0 .183 1.25l.932.939.937.936a1.049 1.049 0 0 0 1.25.183c2.259-1.24 9.394-5.222 11.275-7.1 1.66-1.663 1.275-5.365.962-7.183Zm-3.332 4.187a2.115 2.115 0 1 1-4.23 0 2.115 2.115 0 0 1 4.23 0Z"
                />
              </svg>
            </CardTextIcon>
            <CardTextIcon
              title="Collaborative Efforts"
              text="Believing in the collective strength of teamwork."
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 19"
              >
                <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
              </svg>
            </CardTextIcon>
          </div>
        </div>
      </div>

      <div className="flex text-justify justify-center bg-auto my-12 lg:my-24">
        <div className="max w-5xl px-5">
          <div className="flex justify-center text-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-center underline underline-offset-4 decoration-custom-blue decoration-2 mb-5">Key Milestones</h2>
              <TimelineItem items={timelineData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

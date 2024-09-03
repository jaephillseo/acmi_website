import React from "react";
import SectionHeader from "@/components/sectionheader";

const CoreValues = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-12">
      <SectionHeader text="Our Core Values" />
      <div className="max-w-5xl px-5 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
          Hard Work and Attentiveness
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 mb-10">
          We encourage our employees to stay aware and proactive, fostering innovation and finding better solutions for the future.
        </p>
      </div>
    </section>
  );
};

export default CoreValues;

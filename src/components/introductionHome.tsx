import React from "react";
import SectionHeader from "@/components/sectionheader";

const CompanyHistory = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 py-12">
      <SectionHeader text="Our Journey" />
      <div className="max-w-5xl px-5 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
          Founded in 1995 in Tangerang, Indonesia
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 mb-10">
          Starting as a small mold shop, we have grown into one of the leading mold manufacturers in the world, known for our capacity and quality in shoe mold making.
        </p>
      </div>
    </section>
  );
};

export default CompanyHistory;

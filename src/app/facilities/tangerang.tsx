import React from "react";
import Image from "next/image";

const Tangerang = () => {
  return (
    <>
      <div className="flex text-left justify-center bg-center py-5">
        <div className="max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5">
          <div className="flex justify-center text-center font-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              From Humble Beginnings to Meteoric Rise:
              <br />A Brief Yet Rapid History!
            </h2>
          </div>
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-8">
            <div className="relative sm:max-w-sm w-full h-auto max-w-full md:max-w-md md:h-52 aspect-video sm:md:my-4 lg:ml-4 mb-4 ml-2 mr-2">
              <Image
                src="/images/factory-photo/HSKT_001.jpg"
                
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              <strong>PT. Handal Sukses Karya Tangerang</strong>, founded in{" "}
              <strong>2012</strong> and headquartered in Tangerang, Banten, has
              rapidly established itself as a leader in Indonesia's vibrant
              footwear industry, particularly renowned for its exceptional{" "}
              <strong>EVA midsoles</strong>. Our strategic expansion into
              Central Java is a testament to our dynamic growth, and today, we
              proudly operate three state-of-the-art facilities located in{" "}
              <strong>Tangerang, Jepara, and Rembang</strong>.
            </p>
          </div>
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-4 mb-4">
          <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
            Equipped with cutting-edge technology and machinery, we specialize
            in the production of high-quality{" "}
            <strong>EVA components and bottom midsoles</strong>. Our commitment
            to continuous improvement and innovation has positioned us as a
            distinguished manufacturer within the industry. We are dedicated to
            enhancing our production capabilities and integrating pioneering
            technologies, ensuring our continued leadership in the evolving
            landscape of footwear manufacturing.
          </p>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-10">
            <div className="relative sm:max-w-sm xxs:w-full xxs:h-auto md:max-w-md md:h-52 aspect-video h-52 sm:md:my-4 mb-4 ml-2 mr-2">
              <Image
                src="/images/factory-photo/HSKT_Internal_001.jpg"
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              We are a symbol of{" "}
              <strong>adaptability, foresight, and resilience</strong> in the
              ever-changing world of industry and manufacturing. Since our
              inception, we have been recognized for our exceptional quality
              standards and innovative contributions. This overview delves into
              the significant milestones and evolution of our production
              processes over the last decade.
            </p>
          </div>
          <br />
          <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
            At PT. Handal Sukses Tangerang, we believe that genuine growth
            encompasses more than just figures and statistics. It reflects the{" "}
            <strong>dedication, passion, and collaborative spirit</strong> of
            our entire team. Our journey of growth extends beyond mere
            expansion; it involves a progressive shift towards market
            leadership, underscored by a commitment to sustainable and
            environmentally conscious practices.
          </p>
          <br />
          <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
            Our production evolution is a mirror to our unwavering dedication to
            meeting client needs while maintaining our signature quality. In our
            peak years, we have consistently invested in our facilities,
            advanced technology, and a skilled workforce. Recognizing Central
            Java's strategic advantages, we made a <b>pivotal decision</b> to relocate
            some of our machinery and transition to mass production in the
            region.
          </p>
          <br />
          <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left mb-10">
            Currently, HSK Tangerang's production capacity is over{" "}
            <strong>800,000 pairs per month</strong>. Additionally, we have the
            capability to produce <strong>500 tons of compounds monthly</strong>
            , further emphasizing our scale and efficiency in meeting diverse
            market demands.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tangerang;

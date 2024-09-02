import React from "react";
import Image from "next/image";


const Jepara = () => {
  return (
    <>
      <div className="flex text-left justify-center bg-center py-5 px-4 md:px-8 lg:px-10">
        <div className="max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify">
          <div className="flex justify-center text-center font-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              Forging Ahead in Footwear:
              <br />
              The Journey of PT Handal Sukses Jepara
            </h2>
          </div>
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-8">
            <div className="relative sm:max-w-sm w-full h-auto max-w-full md:max-w-md md:h-52 aspect-video sm:md:my-4 lg:ml-4 mb-4 ml-2 mr-2">
              <Image
                src="/images/factory-photo/HSKJ_001.jpg"
                alt="people"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              Founded in 2017, <strong>PT Handal Sukses Jepara</strong> rapidly
              established itself as a pivotal player in the footwear industry,
              signifying our strategic expansion into Java's central region. Our
              facility, situated in the acclaimed city of{" "}
              <strong>Jepara</strong>—a rising center for shoe manufacturing—has
              rapidly evolved into a key site for large-scale production,
              adeptly meeting the growing demands of the sector with
              unparalleled efficiency and precision.
            </p>
          </div>
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-4 mb-4">
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              In the early stages, our journey was marked by{" "}
              <strong>significant challenges</strong>, primarily stemming from
              the local workforce's initial unfamiliarity with the detailed
              requirements of footwear components manufacturing. This situation
              necessitated a{" "}
              <strong>
                substantial investment in comprehensive training and skill
                enhancement programs
              </strong>
              . Under the expert leadership and unwavering dedication of our
              management team, we navigated these initial obstacles
              successfully. Presently, our operations in Jepara function with
              remarkable efficiency, embodying our dedication to excellence and
              our capacity to adapt to diverse industrial demands.
            </p>
          </div>
          <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left mb-4 sm:md:mb-2">
            Distinctive from our other plants, PT Handal Sukses Jepara boasts a
            specialized <strong>in-house painting line</strong> dedicated
            exclusively for <strong>EVA footwear components</strong>. This not
            only emphasizes our commitment to innovation and excellence but also
            positions us at the forefront of delivering high-quality,
            aesthetically pleasing EVA footwear to our esteemed clients.
          </p>
          <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-10">
            <div className="relative sm:max-w-sm w-full h-auto max-w-full md:max-w-md md:h-52 aspect-video sm:md:my-4 lg:ml-4 mb-4 ml-2 mr-2">
              <Image
                src="/images/factory-photo/HSKJ_Internal_002_comp.jpg"
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:flex-nowrap justify-center items-center mt-4">
              <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
                The foundation of PT Handal Sukses Jepara was laid with a modest
                setup comprising <b>14 IMEVA machines</b>. Driven by a mission to excel
                in a competitive marketplace through a steadfast focus on
                quality and innovation, our journey has seen remarkable growth.
                This growth trajectory is most evident in our expanded
                production capabilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:flex-nowrap justify-center items-center mt-4 mb-10">
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              Currently, our facility boasts the capacity to produce more than{" "}
              <strong>3 million pairs of EVA midsoles monthly</strong>. In
              addition to this, we have the capability to manufacture{" "}
              <strong>500 tons of EVA compound each month</strong>. This
              significant increase in our production output not only
              demonstrates our ability to effectively respond to varied market
              needs but also firmly establishes PT Handal Sukses Jepara as a
              frontrunner in the footwear component manufacturing industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jepara;

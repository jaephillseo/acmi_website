import React from "react";
import Image from "next/image";

const Rembang = () => {
  return (
    <>
      <div className="flex text-left justify-center bg-center py-5">
        <div className="max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify">
          <div className="flex justify-center text-center font-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              Our Journey in Rembang:
              <br />
              Handal Sukses Karya's Newest Milestone
            </h2>
          </div>
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-8">
            <div className="relative sm:max-w-sm w-full h-auto max-w-full md:max-w-md md:h-52 aspect-video sm:md:my-4 lg:ml-4 mb-4 ml-2 mr-2">
              <Image
                src="/images/factory-photo/HSKR_001_comp.jpg"
                alt="people"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              In <b>2021</b>, PT. Handal Sukses Karya embarked on a new chapter
              with the inauguration of our <b>Rembang facility</b> in Central
              Java. This newest addition to our legacy is strategically situated
              on a vast{" "}
              <b>16-hectare</b> expanse. Interestingly, only <b>40%</b> of this
              land is currently developed, offering us an expansive canvas to
              dream bigger, innovate further, and solidify our commitment to
              growth and excellence.
            </p>

          </div>
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-4 mb-4">
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              The journey in Rembang was not without its challenges. The region,
              while abundant in potential, lacked the infrastructure and skilled
              workforce that are often vital for such ambitious endeavors.
              However, with our <b>steadfast determination and vision</b>, we
              managed to rapidly ramp up operations. This swift progress is a
              testament to our team's resilience, adaptability, and relentless
              pursuit of our goals.
            </p>
          </div>

          <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-5">
            <div className="relative sm:max-w-sm w-full h-auto max-w-full md:max-w-md md:h-52 aspect-video sm:md:my-4 lg:ml-4 mb-4 ml-2 mr-2">
              <Image
                src="/images/factory-photo/HSKR_002_comp.jpg"
                alt="people"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:flex-nowrap justify-center items-center">
              <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
                Our ambitions for the <b>Rembang facility</b> don't just stop at
                increasing its physical footprint. We are already laying down
                the groundwork to introduce <b>cutting-edge technologies</b>.
                This forward-thinking approach aims to optimize our production
                processes, enabling us to deliver high-quality products at a
                more competitive cost to our clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:flex-nowrap justify-center items-center mt-4 mb-10">
            <p className="text-base leading-relaxed lg:text-lg ml-2 font-medium text-left">
              Remarkably, despite being the latest addition to our lineage, the
              <b> Rembang plant</b> has quickly risen to prominence. Today, it
              proudly stands as the highest producer among our three factories,
              with a{" "}
              total production capacity of more than <b>3.5 million pairs</b>{" "}
              and <b>800 tons</b> of EVA compound production. This achievement,
              while significant, is just the beginning. With our eyes set on the
              future, we are driven by our passion for
              innovation, quality, and the promise of what lies ahead.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rembang;

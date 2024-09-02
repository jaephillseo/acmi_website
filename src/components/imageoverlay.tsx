import React from "react";
import Image from "next/image";
// import "../styles/imageoverlay.css";

const ImageOverlay = ({ item }: { item: servicesData }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative aspect-square w-64 xxs:w-52 xs:w-64 md:w-56 lg:w-72 xl:w-80 xl:ml-4 xl:mr-4 2xl:w-96 bg-gray-900 group rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={item.image}
            alt={item.altImg}
            fill
            className="transition duration-300 ease-in-out group-hover:opacity-25 group-hover:scale-105 rounded-3xl"
            style={{ objectFit: "cover" }}
            
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 ease-in-out">
            
              <div className="opacity-0 group-hover:opacity-100 text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold break-words p-2 text-center transition-opacity duration-300 ease-in-out">
                {item.text}
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageOverlay;

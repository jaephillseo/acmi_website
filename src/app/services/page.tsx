import React from 'react'
import Offerings from './offerings'
import ProductionData from './productionData'
import Link from 'next/link';

const Services = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const tab = searchParams.tab || "offering";

  return (
    <>
      <div className="hero h-[36rem] bg-top" style={{ backgroundImage: 'url(/images/factory-photo/HSKT_Internal_001.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
          </div>
        </div>
      </div>


      <div className='flex flex-row-reverse text-justify justify-center bg-auto mt-8'>
        <div className='max-w-5xl px-5'>
          <div className='flex flex-row flex-wrap lg:flex-nowrap space-y-5 space-x-5 lg:space-x-10 justify-center'>
            <div className='flex flex-col sm:md:items-center justify-center leading-relaxed'>
              <blockquote className="text-2xl italic font-medium text-center text-gray-900 mt-4">
                <p>Embark on a journey of excellence by experiencing our top-tier services. Elevate your expectations and encounter unparalleled quality and reliability in every interaction.</p>
                <p className='font-bold'>Discover the difference – experience our service today</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5'>
          <div className='flex sm:md:flex-col lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center space-y-4 lg:space-y-0 lg:space-x-10 mt-4'>
            <Link href={`?tab=data`} className="card w-72 h-16 bg-gray-50 custom-card-shadow justify-center" scroll={false}>
              <div className="card-body text-center items-center">
                <h2 className="card-title justify-center">Our Production Capacity</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {tab === "offering" && <Offerings />}
      {tab === "data" && <ProductionData />}
    </>
  )
}

export default Services
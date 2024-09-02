'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const AutoScroller = ({ images }: { images: string[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  return (
    <div className="w-full h-44 overflow-hidden relative">
      <div className="wrapper absolute flex gap-x-50 snap-x snap-mandatory scroll-smooth overflow-x-scroll" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <section className={`autoscroller gap-x-50 ${isHovered ? 'paused' : ''}`}>
          {images.map(( item:string, index:number ) => (
            <div key={index} className='w-auto h-44 p-8 relative aspect-square mx-12'>
              <Image
                src={item} 
                alt={item}
                fill
                style={{objectFit:"contain"}}
                className='self-center'
                />
            </div>
          ))}
        </section>
        <section className='autoscroller gap-x-50'>
          {images.map(( item:string, index:number ) => (
            <div key={index} className='w-auto h-44 p-8 relative aspect-square mx-12'>
              <Image
                src={item} 
                alt={item}
                fill
                style={{objectFit:"contain"}}
                className='self-center'
                />
            </div>
          ))}
        </section>
        <section className='autoscroller gap-x-50'>
          {images.map(( item:string, index:number ) => (
            <div key={index} className='w-auto h-44 p-8 relative aspect-square mx-12'>
              <Image
                src={item} 
                alt={item}
                fill
                style={{objectFit:"contain"}}
                className='self-center'
                />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AutoScroller

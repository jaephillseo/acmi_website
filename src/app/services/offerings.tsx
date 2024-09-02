import React from 'react'
import Image from 'next/image'

const Offerings = () => {
  return (
    <>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center space-x-8'>
            <div className='relative aspect-square h-80 sm:md:my-4'>
              <Image
                src="/images/factory-machines/IP_machine.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-left text-left'>
              <h2 className="text-3xl font-semibold leading-relaxed">Injection Phylon EVA Midsole (IMEVA)</h2>
              <p className="text-lg font-normal mt-2">At the intersection of innovation and expertise, our 78 state-of-the-art Injection EVA machines, coupled with a team of seasoned professionals, position us as leaders in the industry. With a staggering monthly output of 6,150,000 pairs, we are not just meeting industry demands but setting new standards for precision and excellence. </p>
              <p className="text-lg font-medium mt-4">Entrust your vision to us, where cutting-edge technology meets unmatched craftsmanship.</p>
            </div>
          </div>


          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-24 space-x-8 lg:space-x-0'>
            <div className='relative max-w-sm md:max-w-md aspect-square h-80 sm:md:my-4 lg:ml-8'>
              <Image
                src="/images/factory-machines/auto_cmeva.png"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-left text-left'>
              <h2 className="text-3xl font-semibold leading-relaxed">Compression Phylon EVA Midsole (CMEVA)</h2>
              <p className="text-lg font-normal mt-2">Distinguished for our unmatched expertise in footwear technology, we excel in Compression Phylon EVA Midsoles (CMEVA) with 40 advanced machines, boasting a production capacity of 1,130,000 pairs. As the industry leader in Indonesia, our commitment to innovation is evident in our ongoing transition to automatic machines, reinforcing our position and ensuring sustained excellence.</p>
              <p className="text-lg font-medium mt-4">Partner with us to experience the future of footwear technology – where expertise meets innovation, and your vision becomes our commitment.</p>
            </div>
          </div>


          <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center space-x-8 mt-28'>
            <div className='relative aspect-square h-80 sm:md:my-4'>
              <Image
                src="/images/factory-materials/eva_pellet.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-left text-left'>
              <h2 className="text-3xl font-semibold leading-relaxed">EVA Compounding</h2>
              <p className="text-lg font-normal mt-2">Operating 10 cutting-edge EVA compounding production lines, our robust footwear technology infrastructure yields an impressive monthly output of 1,100 tonnes. What sets us apart is our unique advantage – producing compounds exclusively for our needs. This ensures strict adherence to specifications and significantly reduces lead times, emphasizing our commitment to excellence.</p>
              <p className="text-lg font-normal mt-4">Our unwavering dedication is further demonstrated through continuous research and development. We craft superior EVA compounds to meet the escalating demands for higher-grade specifications, placing us at the forefront of innovation in the industry.</p>
            </div>
          </div>


          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-28 space-x-8 lg:space-x-0'>
            <div className='relative max-w-sm md:max-w-md aspect-square h-80 sm:md:my-4 lg:ml-8'>
              <Image
                src="/images/factory-machines/coldshot_rotary.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-left text-left'>
              <h2 className="text-3xl font-semibold leading-relaxed">Coldshot - Direct Molded Press (DMP)</h2>
              <p className="text-lg font-normal mt-2">At the forefront of footwear innovation, our Coldshot - Direct Molded Press (DMP) services deliver 300,000 pairs monthly, featuring unique capabilities like dual-density midsoles. This minimizes the need for midsole painting, streamlining production. Committed to sustainability, our transformative project substitutes all die-cut models with DMP, showcasing our expertise, dedication to efficiency, and commitment to environmentally conscious manufacturing.</p>
              <p className="text-lg font-medium mt-4">Join us on this journey toward sustainable excellence and unmatched quality.</p>
            </div>
          </div>


          <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center space-x-8 mt-24'>
            <div className='relative aspect-square h-80 sm:md:my-4'>
              <Image
                src="/images/factory-machines/stockfitline.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-left text-left'>
              <h2 className="text-3xl font-semibold leading-relaxed">Painting</h2>
              <p className="text-lg font-normal mt-2">Operating from our esteemed Jepara Facility, we run five dedicated EVA painting lines, achieving a monthly output of 300,000 pairs. Our versatile approach caters to diverse painting techniques tailored precisely to customer specifications. Committed to sustainability and collaboration, our vision propels us forward, seeking innovative methods to refine midsole painting processes.</p>
              <p className="text-lg font-medium mt-4">Partner with us in elevating design quality and staying at the forefront of industry standards through collaborative partnerships.</p>
            </div>
          </div>

          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-24 space-x-8 lg:space-x-0'>
            <div className='relative max-w-sm md:max-w-md aspect-square h-80 sm:md:my-4 lg:ml-8'>
              <Image
                src="/images/factory-machines/cmpMachine.jpeg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-left text-left'>
              <h2 className="text-3xl font-semibold leading-relaxed">CMP Blocker</h2>
              <p className="text-lg font-normal mt-2">Equipped with six CMP machines across our facilities, we prioritize precision in designing blockers, the foundation for our high-quality compression EVA midsoles. Our meticulous approach, from the development phase, reflects our commitment to ensuring the highest quality in every aspect of CMEVA production. Excellence begins with impeccable standards, from raw materials to the finished product.</p>
              <p className="text-lg font-medium mt-4">Experience a realm where excellence begins with impeccable standards – from raw materials to the finished product.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offerings
import React from 'react'

const SectionHeader = ({text}:{text:string}) => {
  return (
    <>
      <div className='max-w-prose min-w-full mt-20 md:mt-20 lg:mt-24'>
        <div className='flex flex-row sm:space-x-3 lg:space-x-10 items-center justify-center'>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold transition-all">{text}</h1>
        </div>
      </div>
    </>
  )
}

export default SectionHeader
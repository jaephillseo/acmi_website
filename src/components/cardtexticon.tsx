import React from 'react'

const CardTextIcon = ({ title, text="null", children=null }: { title: string, text?: string, children?: React.ReactNode }) => {
  return (
    <>
      <div className="card-text-icon w-56 h-40 xs:w-72 xs:h-48 sm:w-80 sm:h-48 bg-gray-50 shadow-xl justify-center">
        <div className="card-body text-center items-center">
          {children}
          <h2 className="card-title justify-center text-lg md:text-lg lg:text-2xl">{title}</h2>
          {text != "" && <p className="text-base md:text-base lg:text-lg italic">{text}</p>}
        </div>
      </div>
    </>
  )
}

export default CardTextIcon
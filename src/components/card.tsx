import Link from 'next/link'
import React from 'react'
import '../styles/buttons.css'
import '../styles/card.css'

const Card = ({ data }: { data: cardData }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
        <figure className="w-full aspect-content">
          <img src={data.image} alt={data.altImg} className="object-cover h-full w-full transition-transform duration-300 hover:scale-105" />
        </figure>
        <div className="card-body flex flex-col justify-between px-4 lg:px-8">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">{data.title}</h2>
          <p className="text-sm md:text-lg lg:text-lg">{data.desc}</p>
          <div className="card-actions justify-end">
            <Link href={data.link} className="btn sm:btn-sm md:btn-md lg:btn-lg transition-colors duration-300 hover:bg-custom-blue hover:text-white">
              More
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
import Table from '@/components/tables'
import React from 'react'
import { HSKJ_Tabledata, HSKT_Tabledata, HSK_Total_Tabledata } from '../../../constants/tableConstants'

const ProductionData = () => {
  return (
    <>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <Table tableName="HSK Total Production Data" data={HSK_Total_Tabledata} extraHeadClass='bg-yellow-200 text-black' />
        </div>
      </div>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <Table tableName="HSK Tangerang Production Data" data={HSKT_Tabledata} extraHeadClass='bg-sky-200 text-black' />
        </div>
      </div>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <Table tableName="HSK Jepara Production Data" data={HSKJ_Tabledata} extraHeadClass='bg-sky-200 text-black' />
        </div>
      </div>
    </>
  )
}

export default ProductionData
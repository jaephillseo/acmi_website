import React from 'react'

const Table = ({ tableName, data, extraHeadClass }: { tableName:string, data: tableInterface, extraHeadClass:string }) => {
  return (
    <>
      <div className='text-center mb-3'>
        <h2 className="text-2xl font-semibold leading-relaxed">{tableName}</h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className={`text-xs uppercase text-center ${extraHeadClass}`}>
            <tr>
              {data.titles.map((item: string, index: number) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  <div className="flex justify-center text-center" key={index}>
                    {item}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data.map((item: string[], index: number) => (
              <tr className="bg-white border-b" key={index}>
                {item.map((cell: string, subindex: number) => {
                  if (subindex === 0) {
                    return (
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" key={subindex}>
                        {item[subindex]}
                      </th>
                    );
                  } else {
                    return (
                      <td className="px-6 py-4 text-center" key={subindex}>
                        {cell}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
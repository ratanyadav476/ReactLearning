import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    const { page, totalPages, handlePageChange } = useContext(AppContext)

    return (
        <div className='text-3xl font-bold fixed bg-purple-400 text-black text-center  bottom-0  p-auto flex justify-between items-center gap-5 w-[650px]'>

            <div className='flex justify-center items-center gap-5'>

                {
                    page > 1 &&
                    (

                        <button className='bg-red-500 hover:bg-red-700 p-2 m-2 font-bold border border-white rounded-sm' onClick={() => handlePageChange(page - 1)}>Previous</button>
                    )

                }
                {

                    page < totalPages && (
                        <button 
                        className='bg-gray-700 p-2 m-2 font-bold border border-white rounded-sm' onClick={() => handlePageChange(page + 1)}>Next </button>
                    )

                }
            </div>
            <p className='text-gray-700 font-bold text-2xl p-2 rounded-sm'>page {page} totalPages {totalPages}</p>
        </div>
    )
}

export default Pagination;
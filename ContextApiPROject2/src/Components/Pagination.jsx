import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    const { page, totalPages, HandlepageChange } = useContext(AppContext)
    return (
        <div className='flex items-center justify-between gap-20'>

            {
                page < totalPages && (<button onClick={() => HandlepageChange(page - 1)}>Previous </button>)
            }
            {
                page > 0 && (<button onClick={() => HandlepageChange(page + 1)}>Next </button>)
            }
            {
                <p>page <span>{page} of TotalPages <span>{totalPages}</span></span></p>
            }
        </div>
    )
}

export default Pagination
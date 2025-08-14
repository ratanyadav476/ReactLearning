import React from 'react'
import Items from './Items';

function Cart(props) {
    const data=props.reviews;
  return (
    <div className='grid grid-cols-1 bg-gray-600 p-5 m-auto  sm:grid-cols-2 md:grid-cols-3 '>
        {
           data.map((item)=>(
                <Items key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default Cart
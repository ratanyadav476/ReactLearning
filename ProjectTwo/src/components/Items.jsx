import React, { useState } from 'react'

function Items(props) {

    const item=props.item;
    return (
        <div className='w-auto gap-4 p-4 m-8 h-auto border rounded-3xl text-center'>
            <p className='text-3xl font-bold text-center p-2 '>{item.name}</p>
            <img className='rounded-xl ' src={item.image} alt="" />
            <h3 className='text-4xl font-bold text-rose-600'>{item.job}</h3>
            <div className='description'>{item.text.substring(1,200)}</div>
        </div>
    )
}

export default Items
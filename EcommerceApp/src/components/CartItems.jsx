import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
function CartItems({ item, itemIndex }) {
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id))
  }
  return (
    <div className=''>
      <div className='flex w-[700px] items-center justify-between gap-40 mx-auto border-b border-gray-600 m-4'>
        <div className=' '>
          <img  src={item.image} width={250} />
        </div>
        <div>
          <div className=''>
            <h1 className=' text-gray-700 text-2xl font-semibold'>{item.title}</h1>
            <h1 className=''>{item.description.split(" ").slice(0,10).join(" ")+ "..."}</h1>
          </div>
          <div className='flex items-center justify-between m-8'>
            <p className='text-green-600 font-bold '>${item.price}</p>
            <div className='bg-red-300 cursor-pointer rounded-full text-xl p-3' onClick={removeFromCart}>
              <MdDelete />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
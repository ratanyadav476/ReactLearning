import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import CartItems from '../components/CartItems'
function Cart() {
  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  return (
    <div className=' justify-center items-center '>
      {
        cart.length > 0 ? (
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <div>
              {
                cart.map((item, index) => (
                  <CartItems key={item.id} item={item} itemIndex={index} />

                ))
              }
            </div>

            <div className=' bg-gray-200 w-[700px] h-full mx-auto m-30 p-20 shadow-xl/30 rounded-4xl'>
              <div className='flex  items-center justify-center '>
                <div className='w-full m-6 '>
                  <div className='text-3xl font-extrabold text-black-400 uppercase m-6'>Cart items</div>
                  <div className='text-5xl font-extrabold text-green-600 uppercase  m-6'>Summary</div>
                  <p className='text-gray-600 font-semibold text-xl items-center m-6 '><span>total items: {cart.length}</span></p>
                </div>
              </div>
              <div>
                <p className='text-gray-600 font-bold  items-center ml-12 mt-3'>Total Amount: $ {totalAmount}</p>
                <button className='font-semibold text-gray-900 outline p-5 ml-12 mt-3 w-[250px] bg-green-500 hover:bg-green-900 rounded-3xl transition duration-500  items-center '>CheckOut Now </button>

              </div>
            </div>

          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <h1 className=' text-gray-700 px-19 py-4 m-4  font-semibold text-xl '> your Cart is Empty ..</h1>
            <Link to={"/"}>
              <button className='bg-green-500 text-amber-50 px-19 rounded-md py-4 m-4  hover:bg-gray-800 transition duration-500 font-semibold text-xl '>Shop now</button>

            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart
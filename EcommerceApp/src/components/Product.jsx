import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-toastify';
function Product({ post }) {
    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(add(post))
        toast.success("Item added to Cart")
    }
    const removeFromCart=()=>{
        dispatch(remove(post.id ))
        toast.error("item removed from Cart")
    }
    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-xl/30 mt-10 ml-5 rounded-xl'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title.split(" ").slice(0,10).join(" ")+".."}</p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>{post.description.split(" ").slice(0,10).join(" ")+ "..."} </p>
            </div>
            <div className='h-[180px]'>
                <img src={`${post.image}`} className='h-full w-full' />
            </div>
           <div className='flex items-center justify-center gap-11 mb-10'>
             <div>
                <p className='font-bold text-green-600'>${post.price}</p>
            </div>

            {
            cart.some((p)=>p.id==post.id)?
            ( <button className='text-gray-700 border-2 border-gray-700 uppercase rounded-full font-semibold text-[12px] p-1 hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={removeFromCart}>Remove from Cart</button>):
            (<button  className='text-gray-700 border-2 border-gray-700 uppercase rounded-full font-semibold text-[12px] p-1 hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={addToCart}>Add to Cart</button>)
            }
           </div>
        </div>
    )
}

export default Product
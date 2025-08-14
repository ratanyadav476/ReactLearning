import React, { useEffect, useState } from 'react'
import CartItems from './CartItems';

function Cart(props) {
    const data = props.tours;
    const [loading, setLoading] = useState(false)
   useEffect(()=>{
 setLoading(true)
   },[])
    return (
        <div>

            {
            loading? ( <CartItems data={data} /> ):(<div> Data not found</div> )
            }
        </div>

    )
}

export default Cart
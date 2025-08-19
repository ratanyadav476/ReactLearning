// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from '../redux/slice/CounterSlice'

// function Counter() {
//     const count = useSelector((state) => state.counter.value)
//     const dispatch = useDispatch()
//     return (
//         <div>
//             <button onClick={() => dispatch(increment())}>Increment</button>
//             <div>Counter :  <span>{count}</span></div>
//             <button onClick={() => dispatch(decrement())}>Decrement</button>
//         </div>
//     )
// }

// export default Counter


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/CounterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-80">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Redux Counter</h2>

                <div className="flex items-center justify-center space-x-4 mb-6">
                    <button 
                        onClick={() => dispatch(decrement())}
                        className="px-5 py-2 bg-red-500 text-white font-semibold rounded-xl shadow hover:bg-red-600 transition"
                    >
                        -
                    </button>

                    <span className="text-3xl font-bold text-gray-800 bg-gray-100 px-6 py-2 rounded-lg shadow">
                        {count}
                    </span>

                    <button 
                        onClick={() => dispatch(increment())}
                        className="px-5 py-2 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
                    >
                        +
                    </button>
                </div>

                <p className="text-gray-600 text-sm">Click buttons to update counter</p>
            </div>
        </div>
    )
}

export default Counter

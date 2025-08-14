// import { createSlice } from '@reduxjs/toolkit'


// const initialState={
//     value:0,

// }
// const CounterSlice = createSlice({
//     name:"counter",
//     initialState,
//     reducers:{
//         increment:(state)=>{
//             state.value +=1
//         },
//         decrement:(state)=>{
//             state.value -=1
//         }
//     }
// })
// export const {increment, decrement} = CounterSlice.actions;
// export default CounterSlice.reducer;


// src/redux/slices/CounterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;

// ✅ This must be default
export default CounterSlice.reducer;

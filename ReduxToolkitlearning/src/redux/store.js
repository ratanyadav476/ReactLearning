import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

 const store=configureStore({
    reducer:{
        counter:CounterSlice.reducer
    },
})
export default store;

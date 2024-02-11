import { configureStore } from "@reduxjs/toolkit";
import funredu from "./CartSlice"
import ProductSlice from "./ProductSlice";



const store=configureStore({
   reducer:{
    data:funredu,
    products:ProductSlice

   }
})

export default store
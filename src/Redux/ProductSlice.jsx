import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const STATUS=Object.freeze({
    SUCESS:"success",
    LOADING:"loading",
    ERROR:"error"
})




const productSlice=createSlice({
    name:"products",
    initialState:{
        data:[],
        status:STATUS.SUCESS
    },
    reducers:{
        setProducts(state,action){
            state.data=action.payload
        },

        setStatus(state,action){
            state.status=action.payload
        }
    }
})


export const {setProducts,setStatus}=productSlice.actions;

export default productSlice.reducer


// middleware


export function productList(){
    return async function fetchProducts(dispatch){
         dispatch(setStatus(STATUS.LOADING))
            try {
                const fetchData=await axios.get("https://fakestoreapi.com/products");
                const getData=fetchData.data;
                dispatch(setProducts(getData))
                dispatch(setStatus(STATUS.SUCESS))
                
            } catch (error) {
                console.log(error);
                dispatch(setStatus(STATUS.ERROR))
            }
        
    }
}
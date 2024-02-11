import { createSlice } from "@reduxjs/toolkit";

const CartSlices = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalPrice: 0,
    noItems:""
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    remove(state, action) {
        const removedItem = state.items.find((item) => item.id == action.payload);
    //   state.totalPrice = state.items.reduce((sum, item) => sum - item.price, state.totalPrice);

    if (  removedItem) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalPrice = Math.max(state.totalPrice - removedItem.price, 0);
        state.totalPrice=Math.round(state.totalPrice*100)/100;
      }
      if(state.items.length===0){
        state.totalPrice=0;
        state.noItems="Your Cart is Empty"
      }
    },
    plus(state, action) {
      // state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, state.totalPrice);
        state.totalPrice = Math.round(state.totalPrice * 100) / 100;
      state.items.length+=1;
    },
    minus(state, action) {
    
      state.totalPrice = state.items.reduce((sum, item) => sum - item.price, state.totalPrice);
        state.totalPrice = Math.round(state.totalPrice * 100) / 100;
      state.items.length-=1;


      if (state.items.length === 0) {
        state.totalPrice = 0;
        state.noItems="Your Cart is Empty"
      }
    }
    
  },
});

export const { add, remove,plus,minus } = CartSlices.actions;

export default CartSlices.reducer;

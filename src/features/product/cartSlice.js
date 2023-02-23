import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: [],
      },
    reducers: {
    //   cart(state,action){
    //     console.log("cart>>state...",state);
    //     console.log("cart>>action.payload....",action.payload);
    //     console.log("cart>>action....",action);
    //     state.push(action.payload)
    //   }
    addToCart: (state, action) => {
        const itemInCart = state.cart.find((item) => item.item_id === action.payload.item_id && item.totalprice=== action.payload.totalprice);
        // console.log("itemInCart>>>",itemInCart);
        // console.log("state.cart>>>",state.cart);
        console.log("addToCart>>action.payload....",action);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },
      incrementQuantity: (state, action) => {
        // console.log("............",action);
        const item = state.cart.find((item) => item.totalprice=== action.payload[1] && item.item_id === action.payload[0] );
        // console.log("increment--item",item);
        item.quantity++;
      },
      decrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.totalprice=== action.payload[1] && item.item_id === action.payload[0] );
        
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--;
        }
      },
      
      removeItem: (state, action) => {
        const removeItem = state.cart.filter((item) => item.item_id !== action.payload[0] && item.totalprice !== action.payload[1]);
        state.cart = removeItem;
      },
    },
  });

  console.log("cartSlice",cartSlice.actions);
  export const {cart , addToCart,incrementQuantity,
    decrementQuantity,
    removeItem,} = cartSlice.actions;
export default cartSlice.reducer;
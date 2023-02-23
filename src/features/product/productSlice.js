import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
  name: 'product',
  initialState:[],
  reducers: {
    productReducer(state,action) {
      // console.log("state...",state);
      // console.log("action.payload....",action.payload);
      // console.log("action...",action);
      return action.payload
    },
  
  },
});
console.log("productSlice",productSlice.actions);
export const {productReducer } = productSlice.actions;
export default productSlice.reducer;

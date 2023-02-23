import { createSlice } from '@reduxjs/toolkit';


 const addonSlice = createSlice({
  name: 'addonItem',
  initialState:[],
  reducers: {
    addonReducer(state,action) {
      console.log("addon..state...",state);
      console.log("addon...action.payload....",action);
      // console.log("action...",action);
      return action.payload
    },
  
  },
});
console.log("addonSlice",addonSlice.actions);
export const {addonReducer } = addonSlice.actions;
export default addonSlice.reducer;
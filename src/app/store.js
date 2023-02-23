import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/product/cartSlice";
import productSlice from "../features/product/productSlice";
import productSlice1, { addonDatas } from "../features/product/practice";
import addonslice from "../features/product/addonSlice";


export const Store = configureStore({
  reducer: {
    product: productSlice,
    carts: cartSlice,
    products: productSlice1,
    addonItems:addonslice,
  },
});

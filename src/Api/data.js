import { setProducts } from "../features/product/practice";
import data from "../products.json";
import addonData from "../options.json";
export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchaddonData = () => {
  return async (dispatch) => {
    try {
      dispatch(setProducts(addonData));
    } catch (error) {
      console.log(error);
    }
  };
};

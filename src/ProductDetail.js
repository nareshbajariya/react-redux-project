import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import data from "../src/products.json";
import addonData from "../src/options.json";
import { fetchProduct } from "./Api/data";
import { addonDatas } from "./features/product/practice";
import { addToCart } from "./features/product/cartSlice";
import { addonReducer } from "./features/product/addonSlice";

const ProductDetail = () => {
  const productId = useParams();
  const dispatch = useDispatch();
  const [addons, setAddons] = useState({});
  const [price, setPrice] = useState();
  console.log("price",price);
  const addCart = () => {
    console.log("addToCart", addToCart(findProduct));
    dispatch(addToCart( {...findProduct,totalprice:price,option:addons}));
  };

  const selectedProduct = useSelector((state) => {
    return state;
  });

  const findProduct = data.find((item) => item.item_id === productId.item_id);
  
  // findProduct.price.base_unit=price
  console.log("selectedProduct", selectedProduct);
  // console.log("produtId", productId);
  //   console.log("findProduct", findProduct);

  //.................................... add on data .....................................
 
  // console.log(
  //   "addOnData..........>>",
  //   (addonsAllData[findProduct.item_id] = addons)
  // );
  // setAddonsAllData(addonsAllData[findProduct.item_id] = addons)
  // console.log("addonsAllData....//......>>", addonsAllData);
  // dispatch(addonReducer(addonsAllData))


  const onCLickAddonItem = (product, e,data) => {
    if (e.target.checked) {
      addons[product.section_name] =
        product.uitype === "RADIO" ? [] : addons[product.section_name] || [];
      addons[product.section_name].push(parseFloat(e.target.value));
      // console.log("addons[product.section_name] ",addons[product.section_name] =1);
      console.log(
        "addons[product.section_name] ",
        addons[product.section_name]
      );
      setAddons(Object.assign({}, addons));
    } else {
      let itemIndex = (addons[product.section_name] || []).findIndex(
        (ele) => ele === parseFloat(e.target.value)
      );
      if (itemIndex >= 0) {
        (addons[product.section_name] || []).splice(itemIndex, 1);
        setAddons(Object.assign({}, addons));
      }
    }
  };
 //------ price --------------
 
 useEffect(()=>{
  if (!!findProduct) {
    let basePrice = parseFloat(
      `${findProduct.price.base_unit}.${findProduct.price.exponent}`
    );
    let totalAddonPrice = 0;
    Object.keys(addons).forEach((ele) => {
      let addonPrice = addons[ele].reduce((a, b) => a + b, 0);
      totalAddonPrice = totalAddonPrice + addonPrice;
    });
    setPrice (parseFloat(basePrice + totalAddonPrice).toFixed(1));
  }
},[findProduct,addons]) 

//------ price --------------

  // const onCLickAddonItem = (product, e) => {
  //   if (e.target.checked) {
  //     let data = addons.push(Number(e.target.value));
  //   } else {
  //     for (var i = 0; i < addons.length; i++) {
  //       if (addons[i] === Number(e.target.value)) {
  //         var spliced = addons.splice(i, 1);
  //         console.log("Removed element: " + spliced);
  //         console.log("Remaining elements: " + addons);
  //       }
  //     }
  // }
  // console.log("addons//",addons);
  // setAddons(addons);
  // }
  //.........................................................................
 
  return (
    <>
      <div className="col-4 p-2 ">
        <div className="card m-2 p-2 " style={{ height: "100%" }}>
          <h3>{findProduct.name}</h3>
          <img
            src={findProduct.picture_url}
            style={{ width: "200px" }}
            alt=""
          />
          <p>{findProduct.description}</p>
          <p>
            {price} <strong>{findProduct.price.iso_4217}</strong>
          </p>
          <div>
            {addonData[findProduct.item_id] &&
              addonData[findProduct.item_id].map((addProduct, index) => {
                // console.log("addProduct", addProduct);
                return (
                  <div>
                    <p>{addProduct.section_name}</p>
                    <div>
                      {addProduct.choices.map((data, index) => {
                        return (
                          <div key={index}>
                            <label htmlFor="" style={{ padding: "4px" }}>
                              {
                                <div>
                                  {data.name}
                                  &nbsp;
                                  {data.price.base_unit +
                                    data.price.exponent / 10}
                                  <span className="fw-bold">
                                    {" "}
                                    {data.price.iso_4217}
                                  </span>
                                </div>
                              }
                            </label>
                            <input
                              style={{ padding: "2px" }}
                              type={addProduct.uitype.toLowerCase()}
                              name={addProduct.section_name}
                              required={addProduct.required}
                              value={
                                data.price.base_unit + data.price.exponent / 10 
                              }
                              onChange={(e) => onCLickAddonItem(addProduct, e,data)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
          <button onClick={() => addCart(findProduct)}>add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

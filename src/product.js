import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, Link, Navigate, useNavigate } from "react-router-dom";
import data from "../src/products.json";

import { productReducer } from "./features/product/productSlice";
import { addonDatas } from "./features/product/practice";

function Product() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const prod = useSelector((state) => {
    return state.product;
  });
  //   console.log("prod...", prod);
  dispatch(productReducer(data));
  const selectedProduct = useSelector((state) => {
    return state;
  });
  //...........................................................................
  // const productsInfo = useSelector((state) => state.products.products[0]);
  // console.log("productsInfo",productsInfo);
  // useEffect(() => {
  //   dispatch(fetchProduct());
  // }, []);

  //............................................................................
  const getTotalQuantity = () => {
    let total = 0;
    selectedProduct.carts.cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  // useEffect(() => {
  //   dispatch(productReducer(data));
  //   // console.log("data>>>>>>>>");
  // }, []);

  return (
    <div>
      <header>
        {/* <Link className="btn btn-danger" to={"./cartdetails"}>
          {" "}
          cart={selectedProduct.carts.length}
        </Link> */}
        <div className="shopping-cart">
          <button onClick={() => Navigate("/cartdetails")}>
            Cart= {getTotalQuantity() || 0}
          </button>
        </div>
      </header>
      <hr />
      <h1>Product</h1>
      <div className="row">
        {prod &&
          prod.map((product, id) => {
            return (
              <>
                <div key={id} className="col-4 p-2 ">
                  <Link to={generatePath("/product/:item_id", product)}>
                    <div className="card m-2 p-2 " style={{ height: "100%" }}>
                      <h3>{product.name}</h3>
                      <img
                        src={product.picture_url}
                        style={{ width: "200px" }}
                        alt=""
                      />
                      <p>{product.description}</p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Product;

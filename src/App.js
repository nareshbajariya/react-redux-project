import React from "react";
import Product from "./product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import CartDetails from "./cartDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Product />} />
          <Route path="/product/:item_id" element={<ProductDetail />} />
          <Route path="/cartdetails" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
};

export default App;

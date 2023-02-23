import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "./features/product/cartSlice";

const CartDetails = () => {
  const cart = useSelector((state) => state.carts.cart);
  console.log("cart>>>>>>details", cart);
  const dispatch = useDispatch();
    // const [total, setTotal] = useState();
  //   useEffect(() => {
  //     const price = cart.reduce(
  //       (total, item) =>
  //         total + Number(item.price.base_unit) * Number(item.quantity),
  //       0
  //     );
  //     setTotal(price);
  //   }, [cart]);

  const getTotal = () => {
    let totalQuantity = 0;
    let total = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      total += item.totalprice * item.quantity;
    });
    return { total, totalQuantity };
  };


  return (
    <div>
      <div>
        <h3>Shopping Cart</h3>
        {/* <div> Total={total}</div> */}
        <p className="total__p">
          Total ({getTotal().totalQuantity} items) :{" "}
          <strong>{getTotal().total.toFixed(1)}</strong>
        </p>
        {cart?.map((item) => (
          <div key={item.item_id}>
            <div className="row mt-2 m-1">
              <div className="col-md-2">
                <img
                  src={item.picture_url}
                  alt="Product img"
                  style={{ width: "100%", height: "120px" }}
                  className="rounded"
                />
              </div>
              <div className="col-3">
                <h4>{item.name}</h4>
                <p><strong>Base Price ={item.totalprice}</strong></p>
                <p>total({ item.quantity} items :)={item.totalprice * item.quantity}</p>
                <p>Extra Items name & price: {Object.entries(item.option).map((a,b)=>{return(
                  // console.log(">>sajigk",a,b),
                  <span>{a}  </span>
                )}) } </p>
                
              </div>
              <div className="col-4">
                <div>
                  <button
                    onClick={() =>( dispatch(incrementQuantity([item.item_id ,item.totalprice])))}
                  >
                    +
                  </button>
                  <button>{item.quantity}</button>
                  <button
                    onClick={() => dispatch(decrementQuantity([item.item_id ,item.totalprice]))}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button onClick={() => dispatch(removeItem([item.item_id ,item.totalprice]))}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDetails;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleCleanCart = () => {
    dispatch(clearCart());
  };

  const handleRemove = () => {
    dispatch(removeItem());
  };
  return (
    <div>
      <h1 className="text-2xl font-bold m-3 p-2">cart items</h1>
      <button
        className="bg-red-300 font-bold text-2xl m-3 p-3 rounded-lg"
        onClick={() => handleCleanCart()}
      >
        Clear cart
      </button>
      {cartItem.map((item, index) => (
        <li className="p-2  m-2 bg-slate-300 list-none" key={index}>
          {item}
          <button
            className="bg-red-500 font-bold  m-2 p-1 rounded-lg"
            onClick={() => handleRemove()}
          >
            remove
          </button>
        </li>
      ))}
    </div>
  );
};

export default Cart;

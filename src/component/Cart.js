import React, { createContext, useReducer } from "react";
import "../component/Cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const cartContext = createContext();

const initialState = {
  Item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  const increaseItem = (id) => {
    return dispatch({
      type: "INCREASE",
      payload: id,
    });
  };
  return (
    <cartContext.Provider
      value={{ ...state, removeItem, clearCart, increaseItem }}
    >
      <ContextCart />
    </cartContext.Provider>
  );
};

export default Cart;

import React, { useContext } from "react";
import Items from "./Items";

import { Scrollbars } from "react-custom-scrollbars-2";
import { cartContext } from "./Cart";

const ContextCart = () => {
  const { Item, clearCart, totalItem, totalAmount } = useContext(cartContext);

  if (Item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shoping">
            <img src="./image/arrow.png" alt="aero" className="arrow_icon" />
            <h1>Continue shoping</h1>
          </div>
          <div className="cart_icon_container">
            <img src="./image/cart.jpg" alt="cart" className="cart_icon" />
            <p className="badge">0</p>
          </div>
        </header>
        <section className="main_cart_section">
          <h1>shoping cart</h1>
          <p className="total_item">
            you have <span className="total_item_count">0</span> item in your
            shoping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shoping">
          <img src="./image/arrow.png" alt="aero" className="arrow_icon" />
          <h1>Continue shoping</h1>
        </div>
        <div className="cart_icon_container">
          <img src="./image/cart.jpg" alt="cart" className="cart_icon" />
          <p className="badge">{totalItem}</p>
        </div>
      </header>
      <section className="main_cart_section">
        <h1>shoping cart</h1>
        <p className="total_item">
          you have <span className="total_item_count">{totalItem}</span> item in
          your shoping cart
        </p>
        <div className="cart_item">
          <div className="cart_item_container">
            <Scrollbars>
              {Item.map((currItem) => {
                return <Items key={currItem.id} {...currItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="cart_total">
          <h3>
            Get Total : <span> {totalAmount}</span>
          </h3>
          <button className="checkout_btn">Cheackout</button>
          <button className="checkout_btn clear" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;

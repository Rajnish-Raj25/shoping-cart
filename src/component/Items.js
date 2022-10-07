import React, { useContext } from "react";
import { cartContext } from "./Cart";

const Items = ({ id, description, title, price, img, quantity }) => {
  const { removeItem, increaseItem } = useContext(cartContext);

  return (
    <>
      <div className="product_info">
        <div className="product_img">
          <img src={img} alt="item" className="image" />
        </div>
        <div className="title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="add_quantity">
          <i className="fas fa-minus add_btn"></i>
          <input type="text" placeholder={quantity} />
          <i
            className="fas fa-plus add_btn"
            onClick={() => increaseItem(id)}
          ></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove_item">
          <i className="fas fa-trash-alt" onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;

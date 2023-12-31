import React from "react";
import trashCan from "../../assets/trashCan.svg";
import "../../styles/BodyStyles/CartBody.css";
import CartFooter from "./cartComponents/CartFooter";
import { NavLink } from "react-router-dom";

const CartBody = ({ cart, handleQuantityChange, subtotal, handleDeleteProduct }) => {
  return (
    <div className="cartBody">
      <div className="cartHeader">
        <h2 className="cartTitle">Your Cart</h2>
        <div className="amountOfItems">
          You currently have{" "}
          {cart.length === 1 ? cart.length + " item" : cart.length + " items"}
        </div>
      </div>
      <div className="cartItems">
        {cart.map((item) => (
          <div className="itemWrap" key={cart.indexOf(item)}>
            <div className="itemImgWrap">
              <img src={item.img} alt={item.name} className="itemImg" />
            </div>
            <div className="itemInfoWrap">
              <div className="cartItemHeader">
                <p className="itemName">{item.name}</p>
                <img
                  src={trashCan}
                  alt="remove from cart"
                  className="removeFromCart"
                  onClick={() => handleDeleteProduct(item)}
                />
              </div>
              <div className="priceWrap">
                <p className="itemPriceDollar">{item.price.split(".")[0]}</p>
                <p className="itemPriceCent">{item.price.split(".")[1]}</p>
              </div>{" "}
              <p className="itemSize">Size: {item.size}</p>
              <div className="quantityWrap">
                <button
                  className="quantityChange"
                  onClick={(e) => handleQuantityChange(e, item, "decrement")}
                >
                  -
                </button>
                <input
                  type="text"
                  className="itemQuantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(e, item, "itemQuantity")
                  }
                  pattern="[0-9]*"
                />
                <button
                  className="quantityChange"
                  onClick={(e) => handleQuantityChange(e, item, "increment")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && 
      <CartFooter  subtotal={subtotal}/>
      }
      {cart.length === 0 && 
      <div className="emptyCart">
        <p className="emptyCartTitle">You Have Not Added Anything to Your Cart!</p>
        <NavLink to="/shop" className="emptyCartToShop">Go To Store</NavLink>
      </div>
      }
    </div>
  );
};

export default CartBody;

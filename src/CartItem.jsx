import React from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  removeItem,
  updateQuantity
} from "./CartSlice";

const CartItem = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const calculateTotalAmount = () => {

    let total = 0;

    cartItems.forEach((item) => {

      total += item.price * item.quantity;

    });

    return total;
  };

  return (

    <div>

      <nav
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "15px"
        }}
      >

        <h2>Shopping Cart</h2>

      </nav>

      <h1>Your Cart Items</h1>

      {cartItems.map((item) => (

        <div
          key={item.id}
          className="cart-item"
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px"
          }}
        >

          <img
            src={item.image}
            alt={item.name}
            width="150"
            height="150"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total Price: ₹
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1
                })
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Remove
          </button>

        </div>

      ))}

      <h2>
        Total Cart Amount: ₹
        {calculateTotalAmount()}
      </h2>

    </div>

  );
};

export default CartItem;

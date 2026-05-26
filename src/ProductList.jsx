import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 200
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 300
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 250
  }
];

const ProductList = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Plant Shop</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>

          <p>₹{plant.price}</p>

          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

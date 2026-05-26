import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [

  {
    id: 1,
    name: "Aloe Vera",
    price: 200,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    id: 2,
    name: "Snake Plant",
    price: 300,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },

  {
    id: 3,
    name: "Peace Lily",
    price: 250,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
  },

  {
    id: 4,
    name: "Rose Plant",
    price: 400,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },

  {
    id: 5,
    name: "Jasmine Plant",
    price: 350,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551"
  },

  {
    id: 6,
    name: "Tulsi Plant",
    price: 150,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1470165518248-ff8a7b878ea8"
  }

];

const ProductList = () => {

  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {

    dispatch(addItem(plant));

    setAddedItems([...addedItems, plant.id]);
  };

  return (

    <div>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "green",
          color: "white"
        }}
      >

        <h2>Paradise Nursery</h2>

        <div>
          <a
            href="#plants"
            style={{
              color: "white",
              marginRight: "20px"
            }}
          >
            Plants
          </a>

          <a
            href="#cart"
            style={{
              color: "white"
            }}
          >
            Cart
          </a>
        </div>

      </nav>

      <h1 style={{ textAlign: "center" }}>
        Product Listing
      </h1>

      {["Indoor Plants", "Flowering Plants", "Medicinal Plants"]
        .map((category) => (

        <div key={category}>

          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >

            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (

              <div
                key={plant.id}
                style={{
                  border: "1px solid gray",
                  padding: "15px",
                  width: "220px",
                  borderRadius: "10px"
                }}
              >

                <img
                  src={plant.image}
                  alt={plant.name}
                  width="200"
                  height="200"
                />

                <h3>{plant.name}</h3>

                <p>₹{plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  );
};

export default ProductList;

import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  return (

    <div>

      {!showProductList ? (

        <div className="landing-page">

          <div className="overlay">

            <h1>Paradise Nursery</h1>

            <p>Bring Nature Closer to Your Home</p>

            <button
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>

          </div>

        </div>

      ) : (

        <ProductList />

      )}

    </div>

  );
}

export default App;

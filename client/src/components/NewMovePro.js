import React from "react";
import "./movePro.css";

import useFetch from "../fetchAPI/products";
// import { Typography } from "@mui/material";

function NewMovePro() {
  const { products } = useFetch(`/products?populate=*`);

  const newProducts = products.filter(
    (product) => product.attributes.isNew === true
  );

  console.log(newProducts);

  return (
    <div className="wrapper">
      <div
        className="photobanner"
        style={{ position: "relative", }}
      >
        {newProducts.map((product) => {
          return (
            <div key={product.id} style={{}} className="product_container">
              <h3
                style={{
                  position: "absolute",

                  background: "#BFE3E6",
                  padding: "20px",
                  borderRadius: "10px",
                  color: "blue",
                }}
              >
                NEW
              </h3>
              <img
                src={
                  process.env.REACT_APP_MEDIA_URL +
                  product?.attributes?.img?.data?.attributes?.url
                }
                alt="new products"
              />
              <div className="overlay">
                <span>{product?.attributes.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewMovePro;

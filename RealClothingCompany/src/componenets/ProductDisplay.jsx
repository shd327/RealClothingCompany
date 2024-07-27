import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { APILoad } from "../utils/API";
function ProductDisplay(category) {
  const [items, setItems] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((res) => {
  //         setItems(res.data);
  //         // console.log(res.data.category);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  //   items.map((item) => {
  //     console.log(item.category);
  //   });
  useEffect(() => {
    APILoad().then((data) => {
      setItems(data);
    });
  }, []);
  console.log(category);
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </>
  );
}

export default ProductDisplay;

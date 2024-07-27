import { useState, useEffect } from "react";
import axios from "axios";
// function API(itemId) {
//   console.log("made it to API");
//   console.log(itemId);
//   const [items, setItems] = useState([]);

//   axios
//     .get(`https://fakestoreapi.com/products/category/${itemId}`)
//     .then((res) => {
//       setItems(res.data);
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// export default API;

const API = async (itemId) => {
  console.log("made it to API");
  console.log(itemId);

  const response = await fetch(
    `https://fakestoreapi.com/products/category/${itemId}`
  );
  const data = await response.json();
  console.log(data);
};
export default API;

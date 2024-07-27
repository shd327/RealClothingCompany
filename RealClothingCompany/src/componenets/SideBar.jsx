import React from "react";
import { APICat, APILoad } from "../utils/API";
import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
function SideBar() {
  const [itemId, setItemId] = useState("");

  function handleClick(event) {
    console.log(event.target.id);

    // setItemId(event.target.id);
    // console.log(itemId);
    const data = APICat(event.target.id);
    // <ProductDisplay category={data} />;
    console.log(data);
  }
  return (
    <div className="sidebar-container">
      <ul>
        <li id="men's clothing" onClick={handleClick}>
          men's clothing
        </li>
        <li id="jewelery" onClick={handleClick}>
          jewelery
        </li>
        <li id="electronics" onClick={handleClick}>
          electronics
        </li>
        <li id="women's clothing" onClick={handleClick}>
          women's clothing
        </li>
      </ul>
      <hr className="line" />
      <ul>
        <li>Color</li>
        <li>Shop by Price</li>
      </ul>
    </div>
  );
}
export default SideBar;

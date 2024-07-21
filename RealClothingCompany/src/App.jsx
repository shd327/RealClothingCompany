import { useState } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar";
import SideBar from "./componenets/SideBar";
import ProductDisplay from "./componenets/ProductDisplay";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>RealClothingCompany</h1>
      <SideBar />
      <ProductDisplay />
    </>
  );
}

export default App;

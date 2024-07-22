import { useState } from "react";
import Navbar from "./componenets/Navbar";
import SideBar from "./componenets/SideBar";
import ProductDisplay from "./componenets/ProductDisplay";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <div className="main">
                <SideBar />
                <ProductDisplay />
            </div>
        </>
    );
}

export default App;

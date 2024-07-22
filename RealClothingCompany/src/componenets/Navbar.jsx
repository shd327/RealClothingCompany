import React, { useState } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faHeart,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [menu, setMenu] = useState("home");

    return (
        <>
            <div className="navbar-container">
                <h1>Real Clothing Company</h1>
                <ul className="navbar-links">
                    <li
                        onClick={() => {
                            setMenu("home");
                        }}
                    >
                        Home{menu === "home" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("products");
                        }}
                    >
                        Products{menu === "products" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("about");
                        }}
                    >
                        About{menu === "about" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu("contact");
                        }}
                    >
                        Contact{menu === "contact" ? <hr /> : <></>}
                    </li>
                </ul>
                <div className="sub-nav">
                    <div className="search-section">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="search-icon"
                        />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search"
                        />
                    </div>
                    <ul className="checkout-icons">
                        <li>
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                        </li>
                        <div className="nav-cart-counter">0</div>
                    </ul>
                </div>
            </div>
            <div className="decorative"></div>
        </>
    );
}

export default Navbar;

import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faHeart,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <h1>Real Clothing Company</h1>
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="sub-nav">
                    <div className="search-section">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search"
                        />
                    </div>
                    <ul className="checkout-icons">
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHeart} size="lg"  />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;

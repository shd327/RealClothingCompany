import React from "react";

function SideBar() {
    return (
        <div className="sidebar-container">
            <ul>
                <li>Shirts</li>
                <li>SweatShirts</li>
                <li>Pants</li>
                <li>Caps</li>
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

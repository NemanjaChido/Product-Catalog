import "../css/NavBar.css";
import { useState } from "react";

const NavBar = () => {

    const [isActive, setIsActive] = useState(false); 


    const openMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar">
            <h1>Product Catalog</h1>
            <ul className={`nav-links + ${isActive ? "active" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <span className="menu-icon" onClick={openMenu}>
                <i className="fa-solid fa-bars"></i>
            </span>
        </nav>
    );
};


export default NavBar;
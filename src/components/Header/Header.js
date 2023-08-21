import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header__link">
                Home
            </NavLink>
            <NavLink to="/login" className="header__link">
                Login
            </NavLink>
            <NavLink to="/add_post" className="header__link">
                Add Post
            </NavLink>
        </div>
    );
}

export default Header;
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

    return (
        <div >
            <ul>
            <li>
                    <NavLink   to="/"> Home</NavLink>
                </li>
                <li>
                    <NavLink   to="/products"> Products</NavLink>
                </li>
                <li>
                    <NavLink   to="/Create"> add Product</NavLink>
                </li>
                <li>
                    <NavLink   to="/favourites"> Favourite</NavLink>
                </li>
                <li>
                    <NavLink   to="/cart"> Carts</NavLink>
                </li>
                
            </ul>
        </div>
    )

};

export default Navbar;
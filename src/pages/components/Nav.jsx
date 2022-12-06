import React from "react";
import "./cssfiles/navbar.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/"><li><button>Home</button></li></Link>
            </ul>
        </nav>
    );
}

export default Nav;
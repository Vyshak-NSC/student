import React from "react";
import "./cssfiles/navbar.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Nav() {

    return (
        <nav>
            <ul>
                <Link to="/"><li><button>Home</button></li></Link>
                <Link to="/semesters"><li><button>Semesters</button></li></Link>
            </ul>
        </nav>
    );
}

export default Nav;
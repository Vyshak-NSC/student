import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

let lst = [1,2,3,4,5,6,7,8]
const Semester = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
                    {lst.map((val, key) =>
                        <Link to="/branches"><Card cls="selection-title" title={"Semester " + val} onClick={(navigate("/branches"))} /></Link>
                    )}
            <Footer />
        </div>
    );
};

export default Semester;
import React from "react";
import Header from "./components/Header";// 
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useNavigate, Link} from "react-router-dom";
// import Class from "./Class";


const sems = ["CSE", "ECE", "EEE", "ME", "CE"];

const gotoBranch = (dept) => {
    if (dept === "CE") {
        return "/class";
    }
    else if(dept === "Cse"){
        return "/"
    }
}

const Branches = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {sems.map((val, key) =>
                <Link to={navigate( gotoBranch (val) ) }><Card cls="selection-title" title={val} /></Link>
            )}
            <Footer />
        </div>
    );
};

export default Branches;
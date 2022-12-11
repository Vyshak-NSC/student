import React from "react";
import Header from "./components/Header";// 
import Card from "./components/Card";
import Footer from "./components/Footer";

// let sems = ["Computer Science Engineering",
//             "Electrical and Electronic Engineering",
//             "Electronics and Communication Enginering",
//             "Mechanical Engineering","Civil Engineering"];

const sems = ["CSE","ECE","EEE","ME","CE"];

const Branches = () => {
    return (
        <div>
            <Header />
            {sems.map((val,key) =>
                <Card class="selection-title" title={val} />
            )}
            <Footer />
        </div>
    );
};

export default Branches;
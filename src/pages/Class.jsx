import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
// import { Link, useNavigate } from "react-router-dom";


function Class(props) {
    // const navigate = useNavigate();
    return (
        <div>
            <Header />
            <Card title="Student" cls="mini-card" />
        </div>
    );
}

export default Class;
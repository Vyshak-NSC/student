import React from "react";
import Header from "./components/Header";// 
import Card from "./components/Card";

const Semester = () => {
    return (
        <div>
            <Header />
            <Card class="selection-title" title="Semester 1" />
            <Card class="selection-title" title="Semester 2" />
            <Card class="selection-title" title="Semester 3" />
            <Card class="selection-title" title="Semester 4" />
            <Card class="selection-title" title="Semester 5" />
            <Card class="selection-title" title="Semester 6" />
            <Card class="selection-title" title="Semester 7" />
            <Card class="selection-title" title="Semester 8" />
        </div>
    );
};

export default Semester;
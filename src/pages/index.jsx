import React from "react";
import Nav from "../components/Nav"
import Card from "../components/Card";
import Header from "../components/Header";

function MainPage() {
  return (
    <div>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="container">
        <Card title="Attendance" />
        <Card title="Groups" />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MainPage;

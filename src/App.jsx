import React from "react";
import Nav from "./components/Nav"
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container">
        <Card title="Attendance" />
        <Card title="Groups" />
      </div>
    </div>
  );
}

export default App;

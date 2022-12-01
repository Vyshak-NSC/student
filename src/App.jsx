import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav"
import Card from "./components/Card";

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

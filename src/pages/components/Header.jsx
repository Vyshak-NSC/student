import React from "react";
import "./cssfiles/head.css";
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <header>
        <h1>Attendance Manager</h1>
      </header>
      <Nav />
    </div>
  );
}

export default Header;
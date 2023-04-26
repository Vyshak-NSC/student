import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Header />

        <Link to="/semesters"><Card cls="selection-title" title="Semesters" /></Link>
        <Link to="/"><Card cls="selection-title" title="Groups" /></Link>

      <Footer />
    </div>
  );
};

export default MainPage;

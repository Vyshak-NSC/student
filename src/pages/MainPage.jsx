import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Header />

        <Link to="/semesters"><Card class="selection-title" title="Semesters" /></Link>
        <Link to="/branches"><Card class="selection-title" title="Groups" /></Link>

      <Footer />
    </div>
  );
};

export default MainPage;

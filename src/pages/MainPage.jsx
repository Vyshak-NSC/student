import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div > {/*className="container"> */}
        <Link to="/semesters"><Card class="selection-title" title="Semesters" /></Link>
        <Card class="selection-title" title="Groups" />
      </div>
    </div>
  );
};

export default MainPage;

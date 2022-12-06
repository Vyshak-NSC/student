import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div > {/*className="container"> */}
        <Link to="/second"><Card class="selection-title" title="Attendance" /></Link>
        <Card class="selection-title" title="Groups" />
      </div>
    </div>
  );
};

export default MainPage;

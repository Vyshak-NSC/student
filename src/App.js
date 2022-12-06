import React, { Component } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";// Switch, Link, Redirect 
import MainPage from "./pages/MainPage.jsx";
import Semester from "./pages/Semesters.jsx";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MainPage />} />
                    <Route path="/semesters" exact element={ <Semester /> } />
                    {/* <Route path="/groups" exact element={ < Groups/> } /> */}
                </Routes>
            </BrowserRouter>
        );
    }
};

export default App;
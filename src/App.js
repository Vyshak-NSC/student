import React, { Component } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";// Switch, Link, Redirect 
import MainPage from "./pages/MainPage.jsx";
import Second from "./pages/Second";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MainPage />} />
                    <Route path="/second" exact element={ <Second /> } />
                </Routes>
            </BrowserRouter>
        );
    }
};

export default App;
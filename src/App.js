import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPage from "./pages/index.jsx";
import Second from "./second.jsx";

class App extends Component{
    render(){
        return (
            <Router>
                <Route path="/" component={MainPage} />
                <Route exact path="/second" component={Second} />
            </Router>
        );
    }
}
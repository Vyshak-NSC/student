import React, {Component} from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";// Switch, Link, Redirect 
import MainPage from "./pages/index.jsx";
import Second from "./second.jsx";

class App extends Component{
    render(){
        return (
            <Router>
                <Route exact path="/" component={ MainPage } />
                <Route exact path="/second" component={Second} />
            </Router>
        );
    }
}

export default App;
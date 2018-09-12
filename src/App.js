import React, { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Pictures from "./containers/Pictures/Pictures";
import PictureDetails from "./containers/PictureDetails/PictureDetails";
import Background from "./components/UI/Background/Background";
import Navigation from "./components/Navigation/Navigation";
import InitializedForm from "./containers/InitializedForm/InitializedForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Background from="#66CCCC" to="#008080" />
                <Navigation />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/pictures" exact component={Pictures} />
                    <Route path="/pictures/new" component={InitializedForm} />
                    <Route path="/pictures/:id" exact component={PictureDetails} />
                    <Route path="/pictures/:id/update" component={InitializedForm} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        );
    }
}

export default App;
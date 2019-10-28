import React from 'react';
import NavBar from "./components/navBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import ToDoList from "./components/toDoList";
import Logs from "./components/logs";

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <main>
                <Router>
                    <Switch>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/toDoList">
                            <ToDoList/>
                        </Route>
                        <Route path="/logs">
                            <Logs/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </main>
        </React.Fragment>
    );
}

export default App;

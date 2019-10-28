import React, {Component} from 'react';

class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-collapse bg-light">
                    <a className="navbar-brand" href="/">Hello</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home<span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/toDoList">ToDoList</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logs">Logs</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;

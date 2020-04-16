import React from "react";
import { Link, NavLink } from "react-router-dom";
import API from "../utils/API";

const NavBar = (props) => {
    const handleLogout = () => {
        API.logout().then(res => {
            window.location.assign("/");
        });
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Scroll Game</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <NavLink className="nav-link" to="/" isActive={() => window.location.pathname === "/"} activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink className="nav-link" to="/game" activeClassName="active">Game</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink className="nav-link" to="/score" activeClassName="active">High Scores</NavLink>
                    </li>

                    {!props.isLoggedIn &&
                        <React.Fragment>
                            <li className="nav-link">
                                <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink className="nav-link" to="/signUp" activeClassName="active">Sign Up</NavLink>
                            </li>
                        </React.Fragment>
                    }

                    {props.isLoggedIn &&
                        <li className="nav-link">
                            <NavLink className="nav-link" to="/" activeClassName="active" onClick={handleLogout}>Logout</NavLink>
                        </li>
                    }

                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
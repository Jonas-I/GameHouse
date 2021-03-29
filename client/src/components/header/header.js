import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
            <Link className="navbar-brand" to="/">Micro Blog</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/posts/new">
                        Create a Micro Post
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about-us">
                        About Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

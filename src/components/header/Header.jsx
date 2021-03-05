import './Header.css';
import {Link} from "react-router-dom";
import React from "react";
import logo from '../../images/logo3.jpg';


export function Header () {
    return <div className="Header">
            <div className="container">
                <img
                    alt="Disneyland"
                    src={logo}
                    width="150"
                    height="45"
                    className="d-inline-block align-top"
                    style={{"borderRadius": 200 / 2}}
                />{''}
                <div className="navbar-right">
                    <Link className="link nav-link" to="/theme-parks">Theme Parks</Link>
                    <Link className="link nav-link" to="/attractions">Attractions</Link>
                    <Link className="link nav-link" to="/gifts">Gifts</Link>
                    <Link className="link nav-link" to="/contact-us">Contact Us</Link>
                </div>
            </div>
    </div>
}
import './Header.css';
import {Link} from "react-router-dom";
import React from "react";
import logo from './logo3.jpg';


export function Header () {
    return <div className="Header">
            <img
                alt="Disneyland"
                src={logo}
                width="80"
                height="30"
                className="d-inline-block align-top"
            />{''}
        <Link className="link" to="/theme-parks">Theme Parks</Link>
        <Link className="link" to="/disney-characters">Disney Characters</Link>
        <Link className="link" to="/gifts">Gifts</Link>
    </div>
}
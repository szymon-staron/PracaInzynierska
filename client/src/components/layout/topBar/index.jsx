import React from "react";
import "./style.scss";
import logo from "../../../images/logo.png";
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

export const TopBar = () => {
    return <header>

        <NavLink to="/">  <img className="logo" src={logo} alt="logo" /></NavLink>
        <nav>
            <ul className="navigation__links">
                <li><a href='/shop'>Produkty</a> </li>
                <li><a href='/contact'>Kontakt</a> </li>
            </ul>
        </nav>
        <button> <NavLink to="basket"><BsFillCartFill /></NavLink></button>
        <button> <NavLink to="/account/login"><FaUserAlt /></NavLink></button>

    </header>


};
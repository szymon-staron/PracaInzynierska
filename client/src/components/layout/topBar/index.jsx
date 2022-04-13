import React from "react";
import "./style.scss";
import logo from "../../../images/logo.png";
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

export const TopBar = () => {
    return <header>

        <NavLink to="/">  <img className="logo" src={logo} alt="logo" /></NavLink>
        <nav>
            <ul className="navigation__links">
                <li><a href='/shop'>Produkty</a> </li>
                <li><a href='#'>Kontakt</a> </li>
                <li><a href='#'>O nas</a> </li>
                <li><a href='#'>Konto</a> </li>
            </ul>
        </nav>
        <button> <NavLink to="/account/login"><FaUserAlt /></NavLink></button>

    </header>


};
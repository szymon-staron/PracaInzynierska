import React from "react";
import "./style.scss";
import logo from "../../../images/logo.png";

export const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div >
                <img className="footer__logo" src={logo} alt="" />
            </div>
            <div className="footer__col">
                <h4>Sklep</h4>
                <ul>
                    <li><a href="#">Rolki</a></li>
                    <li><a href="#">Kółka</a></li>
                    <li><a href="#">Ochraniacze</a></li>
                    <li><a href="#">Akcesoria</a></li>
                </ul>
            </div>
            <div className="footer__col">
                <h4>O nas</h4>
                <ul>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Dane kontaktowe</a></li>
                </ul>
            </div>
            <div className="footer__col">
                <h4>Kontakt</h4>
                <ul>
                    <li><a href="#">12 123 12 12</a></li>
                    <li><a href="#">sklep@zrolkami.pl</a></li>
                    <li><a href="#"></a>ul.Rolkowa 12 Warszawa</li>
                    <li><a href="#">pn-pt: 10-20, sob:11-14</a></li>
                </ul>
            </div>




        </div>

    </footer>





};

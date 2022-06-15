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
                    <li><a href="/shop">Rolki</a></li>
                </ul>
            </div>
            <div className="footer__col">
                <h4>Pytanie? </h4>
                <ul>
                    <li><a href="/contact">Formularz kontaktowy</a></li>
                </ul>
            </div>
            <div className="footer__col">
                <h4>Kontakt</h4>
                <ul>
                    <li><a href="/contact">12 123 12 12</a></li>
                    <li><a href="/contact">sklep@zrolkami.pl</a></li>
                    <li><a href="/contact"></a>ul.Rolkowa 12 Warszawa</li>
                    <li><a href="/contact">pn-pt: 10-20, sob:11-14</a></li>
                </ul>
            </div>




        </div>

    </footer>





};

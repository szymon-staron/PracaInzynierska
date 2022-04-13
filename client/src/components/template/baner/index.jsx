import React from "react";
import "./style.scss";
import baner1 from "../../../images/baner1.png";
import baner2 from "../../../images/baner2.png";
import baner3 from "../../../images/baner3.png";
import baner4 from "../../../images/baner4.png";


export const Baner = () => {
    return <section className="banner">

        <div className="banner__article"><img className="banner__img" src={baner1} alt="" /><h4 className="banner__text">Szybka dostawa</h4></div>
        <div className="banner__article"><img className="banner__img" src={baner2} alt="" /><h4 className="banner__text">Jesteśmy zaufanym sprzedawcą</h4></div>
        <div className="banner__article"><img className="banner__img" src={baner3} alt="" /><h4 className="banner__text">Masz pytania? Zadzwoń</h4></div>
        <div className="banner__article"><img className="banner__img" src={baner4} alt="" /><h4 className="banner__text">30 dni na zwrot</h4></div>
    </section>


};
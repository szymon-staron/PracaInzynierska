import React from "react";
import { CardNav } from "../nav/cardNav";
import { Product } from "../product";
import { useSelector } from "react-redux";
import "./style.scss";

export const Card = () => {
    const { rolls } = useSelector((state) => state.inventory);

    const displayProduct = rolls.map((roll) => (
        <Product {...roll} id={roll._id} />
    ));

    return (
        <div className="card">
            <CardNav />
            <div className="card__container">{displayProduct}</div>
        </div>
    );
};

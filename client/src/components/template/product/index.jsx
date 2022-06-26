import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Product = ({
    id,
    name,
    price,
    size,
    description,
    image,
    discount,
    category,
}) => {
    return (
        <div className="products">
            <NavLink to={`/shop/product/:${id}`} className="products_link">
                <img className="products__img" src={image} alt={name} />
                <p className="products__size">ROZMARY: {size[0]}</p>
                <h1 className="products__name">{name}</h1>
                <p className="products__price">{price} zł</p>
            </NavLink>
        </div>
    );
};

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementProduct,
    decrementProduct,
    removeProduct,
} from "store/order/orderSlice";
import "./style.scss";

export const BasketItem = ({
    id,
    name,
    price,
    size,
    amount,
    description,
    image,
    discount,
    category,
}) => {
    const dispatch = useDispatch();

    const handleIncrementItem = () => {
        dispatch(incrementProduct(id));
    };

    const handleDecrementItem = () => {
        if (amount === 1) {
            dispatch(removeProduct(id));
        } else {
            dispatch(decrementProduct(id));
        }
    };

    return (
        <div className="basketitem">
            <img className="basketitem__img" src={image} alt={name} />
            <h1 className="basketitem__name">{name}</h1>
            <p className="basketitem__size">Rozmiar:{size[0]}</p>
            <p className="basketitem__price">{parseInt(price) * amount} zł</p>
            <div className="basketedit">
                <span className="basketedit__plus" onClick={handleIncrementItem}>
                    +
                </span>
                <span className="basketedit__quantity">{amount}</span>
                <span className="basketedit__minus" onClick={handleDecrementItem}>
                    -
                </span>
            </div>
        </div>
    );
};

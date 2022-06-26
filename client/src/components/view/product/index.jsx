import { React } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "store/order/orderSlice";

import "./style.scss";

export const Product = () => {
    const { rolls } = useSelector((state) => state.inventory);

    const dispatch = useDispatch();

    const id = window.location.href.split(":")[3];

    const product = rolls.find((roll) => roll._id === id);

    if (!product) {
        return null;
    }

    const size = product.size.map((el, index) => {
        if (index === 1) {
            return (
                <option selected value={el}>
                    {el}
                </option>
            );
        }
        return <option value={el}>{el}</option>;
    });

    const handleAddProduct = () => {
        dispatch(addProduct({ ...product, amount: 1 }));
    };

    return (
        <div className="cont">
            <div>
                <img className="product__img" src={product.image} alt="" />
            </div>
            <div className="product">
                <h3 className="product__name">{product.name}</h3>
                <p className="product__description">{product.description}</p>
                <select className="product__size">{size}</select>
                <p className="product__pice">{product.price} zł</p>
                <button className="product__button" onClick={handleAddProduct}>
                    Dodaj do koszyka
                </button>
            </div>
        </div>
    );
};

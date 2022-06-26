import { React, useEffect } from "react";
import "./style.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, totalPayment } from "store/order/orderSlice";
import { BasketItem } from "components/template/basketItem/basketItem";

export const Basket = () => {
    const [discount, setDiscount] = useState();
    const { cartItems, cartTotalAmount } = useSelector((state) => state.order);

    const handleOnChange = (event) => {
        const { value } = event.target;
        setDiscount(value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(cartTotalAmount);
        dispatch(totalPayment());
    }, [cartItems]);

    const displayBasketItems = cartItems.map((item) => (
        <BasketItem {...item} id={item._id} />
    ));

    return (
        <div className="order">
            <div className="basket__products">{displayBasketItems}</div>
            <div className="basket">
                <h3 className="basket__price">{cartTotalAmount} zł</h3>
                <div className="discout">
                    <input
                        onChange={handleOnChange}
                        className="basket__discount"
                        type="text"
                        value={discount}
                        placeholder="Kod rabatowy"
                    />
                    <button className="basket__discount-button">Zrealizuj</button>
                </div>

                <textarea className="basket__comments" id="comments" name="comments">
                    Wprowadź uwagi do zamówienia
                </textarea>
                <button className="basket__button">Zamów</button>
            </div>
        </div>
    );
};

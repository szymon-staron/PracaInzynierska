import { React } from 'react';
import './style.scss';
import { useState } from 'react';




export const Basket = () => {
    const [discount, setDiscount] = useState();

    const handleOnChange = event => {
        const { value } = event.target;
        setDiscount(value);
    };
    return <div className='order'>
        <div className='basket__products'>Lista produktów</div>
        <div className='basket'>
            <h3 className='basket__price'>Cena koszyka</h3>
            <div className='discout'> <input onChange={handleOnChange} className='basket__discount' type="text" value={discount} placeholder="Kod rabatowy" />
                <button className='basket__discount-button'>Zrealizuj</button>
            </div>

            <textarea className='basket__comments' id="comments" name="comments">
                Wprowadź uwagi do zamówienia
            </textarea>
            <button className='basket__button'>Zamów</button>
        </div>
    </div>;

};

import { React } from 'react';
import './style.scss';
import { useNavigate } from 'react-router';

export const Product = () => {
    return (
        <div className='cont'>

            <div>  <img className='product__img' src="https://www.tradeinn.com/f/13782/137827744/rollerblade-rb-pro-x-banan-marakuja.jpg" alt="" /> </div>
            <div className='product'>
                <h3 className='product__name'>Nazwa produktu</h3>
                <p className='product__description'>Tutaj jest sobie roleczka która chce być kupiona przez klienta takiego o superowego i bogatego</p>
                <select className='product__size'>
                    <option value="1" selected>37,5 - 39</option>
                    <option value="2">37,5 - 39</option>
                    <option value="3">37,5 - 39</option>
                    <option value="4" selected>37,5 - 39</option>
                    <option value="5">37,5 - 39</option>
                    <option value="6">37,5 - 39</option>
                </select>
                <p className='product__pice'>2137,2137zł</p>
                <button className='product__button'>Dodaj do koszyka</button>

            </div>
        </div>
    );
};

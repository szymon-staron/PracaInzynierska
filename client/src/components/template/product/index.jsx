import React from 'react';
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
    return <div className='product'>
        <img className='product__img' src="https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR4047BI16686_908337_36270_Next_Outback_150_SZ4_353x400.jpg?v=1636561220" alt="" />
        <p className='product__size'>ROZMARY: 35,5 - 44</p>
        <h1 className='product__name'>Rolki Super modle 12 15 / 13 -black</h1>
        <p className='product__price'>666,66 zł</p>
    </div>;
};

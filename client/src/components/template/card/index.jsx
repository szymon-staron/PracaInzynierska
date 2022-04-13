import React from 'react';
import { CardNav } from '../nav/cardNav';
import { Product } from '../product';
import './style.scss';

export const Card = () => {
    return (
        <div className="card">
            <div className="card__top">test</div>
            <CardNav />
            <div className="card__container"> <Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product /></div>
        </div>
    );
};

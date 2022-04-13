import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'components/template/card';
import './style.scss';


export const Shop = () => {
    const { rolls } = useSelector((state) => state.inventory);
    console.log(rolls);
    return <div className='shop'>
        <Card></Card>

    </div>;
};

import { React } from 'react';
import { SimpleSlider } from '../../template/slider';
import { Baner } from '../../template/baner';
import './style.scss';

export const Home = () => {
    return (
        <div>
            <SimpleSlider></SimpleSlider>
            <div className='baner__style'>
                <Baner></Baner>
            </div>
        </div>
    );
};

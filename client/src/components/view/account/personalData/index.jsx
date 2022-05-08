import * as React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';

export const PersonalData = () => {
    const { user } = useSelector((state) => state);
    console.log(user.details.name);

    return (
        <div></div>



    );
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component }) => {
    const { auth } = useSelector((state) => state);

    if (auth.isAuthenticated) return component;
    return <Navigate to="/account/login" />;
};

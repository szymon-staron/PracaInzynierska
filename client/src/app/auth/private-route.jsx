import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ component }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    if (isAuthenticated) return component;
    else return <Navigate to="/" />;
};

import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './components/routing/privateRoute';

export const Routers = () => {
    return (
        <Routers>
            {router}
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/account" element={<PrivateRoute Component={Contact} />} />
        </Routers>
    );
};

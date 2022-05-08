import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { PrivateRoute } from './components/routing/privateRoute';
import {
  Login,
  Register,
  User,
  Home,
  Shop,
  Contact,
  PageNoFound,
  Basket,
} from './components/view';
import { getUserFromLocalStorage } from './store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  dispatch(getUserFromLocalStorage());

  return (
    <MainLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/account/register" element={<Register />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route
          exact
          path="/account/user"
          element={<PrivateRoute component={<User />} />}
        />
        <Route path="*" element={<PageNoFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;

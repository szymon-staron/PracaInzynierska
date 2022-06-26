import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { PrivateRoute } from "./components/routing/privateRoute";
import {
  Login,
  Register,
  User,
  Home,
  Shop,
  Product,
  Contact,
  PageNoFound,
  Basket,
} from "./components/view";
import { getUserFromLocalStorage } from "./store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { client } from "api";
import { inventoryData } from "store/inventory/inventorySlice";
import { loadProduct } from "store/order/orderSlice";

const App = () => {
  const {
    auth: { user },
    inventory: { rolls },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFromLocalStorage());
    dispatch(loadProduct());
  }, []);

  const handleFetchData = async () => {
    try {
      const { result } = await client("/product");
      if (result) {
        dispatch(inventoryData(result));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/product/:id" element={<Product />} />
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

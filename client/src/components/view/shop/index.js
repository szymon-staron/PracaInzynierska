import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "components/template/card";
import { inventoryData } from "store/inventory/inventorySlice";
import "./style.scss";

export const Shop = () => {
    return (
        <div className="shop">
            <Card></Card>
        </div>
    );
};

import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartItem = ({data}) => {

    console.log(data);

    const {quantity} = data;
    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data?.value;
    const pricePerItem = price ? Math.round(price/100) : Math.round(defaultPrice/100);

    return (
        <li className="cart__item" id={id}>
            <div className="cart__item__details">
                <div className="cart__item__details__lt">
                    <img className="cart__item__img" src={IMG_URL + imageId} onError={(e) => e.target.src = FoodNotFound} alt="food-image" />
                </div>
                <div className="cart__item__details__rt">
                    <div className="cart__item__name">{name}</div>
                    <div className="cart__item__desc">{description}</div>
                </div>
            </div>
            <div className="cart__item__val"><span className="rupees-arial">&#8377;</span>{pricePerItem}</div>
            <div className="cart__item__val">{quantity}</div>
            <div className="cart__item__val"><span className="rupees-arial">&#8377;</span>{pricePerItem * quantity}</div>
        </li>
    )

}

export default CartItem;
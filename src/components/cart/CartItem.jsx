import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartItem = ({data}) => {

    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data.card.info;
    const cartItems = useSelector(store => store.cart.items);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        cartItems.map((item) => {
            
        })
    }, [])

    return (
        <li className="cart__item">
            <div className="cart__item__details">
                <div className="cart__item__details__lt">
                    <img className="cart__item__img" src={IMG_URL + imageId} onError={(e) => e.target.src = FoodNotFound} alt="food-image" />
                </div>
                <div className="cart__item__details__rt">
                    <div className="cart__item__name">{name}</div>
                    <div className="cart__item__desc">{description}</div>
                </div>
            </div>
            <div className="cart__item__val"><span className="rupees-arial">&#8377;</span>{price ? Math.round(price/100) : Math.round(defaultPrice/100)}</div>
            <div className="cart__item__val">{quantity}</div>
            <div className="cart__item__val"><span className="rupees-arial">&#8377;</span>{totalPrice}</div>
        </li>
    )

}

export default CartItem;
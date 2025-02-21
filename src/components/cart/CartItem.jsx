import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";
import { Link } from "react-router-dom";
import { removeItem, addItem, clearItem } from "../../utils/redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({data}) => {

    const dispatch = useDispatch();

    const {quantity} = data;
    const {id, name, description, imageId, price, defaultPrice, resName, resId} = data?.value;
    const pricePerItem = price ? Math.round(price/100) : Math.round(defaultPrice/100);

    const removeFoodItem = () => {
        dispatch(removeItem(id));
    }

    const addFoodItem = () => {
        dispatch(addItem({value: {"id": id}}));
    }

    const clearFoodItem = () => {
        dispatch(clearItem(id));
    }

    return (
        <li className="cart__item" id={id}>
            <div className="cart__item__details">
                <div className="cart__item__details__lt">
                    <img className="cart__item__img" src={IMG_URL + imageId} onError={(e) => e.target.src = FoodNotFound} alt="food-image" />
                </div>
                <div className="cart__item__details__rt">
                    <Link className="cart__item__resName" to={"/restaurants/" + resId}>
                        {resName}
                    </Link>
                    <div className="cart__item__name">{name}</div>
                    <div className="cart__item__desc">{description}</div>
                </div>
            </div>
            <div className="cart__item__val">
                <span className="rupees-arial">&#8377;</span>{pricePerItem}
            </div>
            <div className="cart__item__val">
                <div className="cart__item__quant">
                    <div className="menu__item__del" onClick={() => removeFoodItem()}>-</div>
                    {quantity}
                    <div className="menu__item__add" onClick={() => addFoodItem()}>+</div>
                </div>
            </div>
            <div className="cart__item__val">
                <div className="cart__item__cross" onClick={() => clearFoodItem()}></div>
            </div>
        </li>
    )

}

export default CartItem;
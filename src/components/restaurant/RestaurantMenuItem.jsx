import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RestaurantMenuItem = ({data, addFoodItem, removeFoodItem}) => {

    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data.card.info;
    const [quantity, setQuantity] = useState(0);
    const cartItems = useSelector(store => store.cart.items);

    useEffect(() => {

        cartItems.map((item) => {
            return item.card.info.id === id && setQuantity(quantity + 1);
        })
        
    }, [])

    const addItem = () => {
        addFoodItem(data);
        setQuantity(quantity + 1);
    }

    const removeItem = () => {
        removeFoodItem(id);
        setQuantity(quantity - 1);
    }

    return (
        <li id={id} className="menu__item">
            <div className="menu__item__info">
                {itemAttribute.vegClassifier === 'VEG' ? <div className="menu__item__veg"></div> : <div className="menu__item__nonVeg"></div>}
                <div className="menu__item__name">{name}</div>
                <div className="menu__item__cost"><span className="rupees-arial">&#8377;</span>{price ? Math.round(price/100) : Math.round(defaultPrice/100)}</div>
                <div className="menu__item__desc">{description}</div>
            </div>
            <div className="menu__item__image-container">
                <img className="menu__item__image" src={IMG_URL + imageId} onError={(e) => e.target.src = FoodNotFound} alt="food-image" />
                { quantity === 0 ?
                    <button className="menu__item__cta" onClick={() => addItem()}>Add +</button>
                    : 
                    <>
                        <div className={`menu__item__cta ${quantity > 0 && 'active'}`}>
                            <button className="menu__item__del" onClick={() => removeItem()}>-</button>{quantity}<button className="menu__item__add" onClick={() => addItem()}>+</button>
                        </div>
                    </>
                }
            </div>
        </li>
    )
}

export default RestaurantMenuItem;
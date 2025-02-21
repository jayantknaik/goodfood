import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RestaurantMenuItem = ({data, addFoodItem, removeFoodItem, resName}) => {
    
    const {resId} = useParams();

    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data.card.info;
    const [quantity, setQuantity] = useState(0);
    const cartItems = useState(useSelector(state => state.cart.items));

    console.log(cartItems);
    
    useEffect(() => {

        let count = 0;

        cartItems.map((item) => {
            if (item?.value?.card?.info?.id === id) {
                count++;
            }
        })

        setQuantity(count);
        
    }, [])

    const addItem = () => {

        const {id, imageId, name, price, description} = data?.card?.info;

        addFoodItem(
            {
                resId, 
                value: {
                    "id": id,
                    "imageId": imageId,
                    "name": name,
                    "price": price,
                    "defaultPrice": defaultPrice,
                    "description": description,
                    "resName": resName,
                    "resId": resId
                }
            }
        );

        setQuantity(quantity + 1);
    }

    const removeItem = () => {
        removeFoodItem(id);
        setQuantity(quantity - 1);
    }

    return (
        <li id={id} className="menu__item">
            <div className="menu__item__info">
                <div className="menu__item__row">
                    <div className="menu__item__name">{name}</div>
                    {itemAttribute.vegClassifier === 'VEG' ? <div className="menu__item__veg"></div> : <div className="menu__item__nonVeg"></div>}
                </div>
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
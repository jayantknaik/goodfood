import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RestaurantMenuItem = ({data, addFoodItem, removeFoodItem}) => {

    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data.card.info;
    const [quantity, setQuantity] = useState(0);
    const cartItems = useSelector(store => store.cart.items);

    useEffect(() => {

        let count = 0;

        cartItems.map((item) => {
            if (item.card.info.id === id) {
                count++;
            }
        })

        setQuantity(count);
        
    }, [])

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const addItem = () => {
        addFoodItem(data);
        setQuantity(quantity + 1);
        // if( quantity >= 1 ) {

        //     let index = cartItems.findIndex(item => item.card.info.id === id);
        //     if (index !== -1) {
        //         cartItems[index].card.info.quantity = quantity;
        //     }

        // }
        // else {
        // }
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
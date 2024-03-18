import { IMG_URL } from "../utils/constants";
import FoodNotFound from "../.././assets/images/dummyFood.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const RestaurantCategory = ({id, title, itemCards, isExpanded, toggleCategory}) => {

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="menu__category">
            <div className="menu__head">
                <div className="menu__head__text">{title}</div>
                <div className={`menu__head__arrow ${isExpanded === id ? 'expand' : ''} `} onClick={() => toggleCategory({id: id})}></div>
            </div>
            <div className={`menu__list ${isExpanded === id ? 'expand' : ''}`}>
            {
                itemCards.map((li) => {

                    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = li.card.info;

                    return (
                        <li id={id} key={id} className="menu__item">
                            <div className="menu__item__info">
                                {itemAttribute.vegClassifier === 'VEG' ? <div className="menu__item__veg"></div> : <div className="menu__item__nonVeg"></div>}
                                <div className="menu__item__name">{name}</div>
                                <div className="menu__item__cost"><span className="rupees-arial">&#8377;</span>{price ? Math.round(price/100) : Math.round(defaultPrice/100)}</div>
                                <div className="menu__item__desc">{description}</div>
                            </div>
                            <div className="menu__item__image-container">
                                <img className="menu__item__image" src={IMG_URL + imageId} onError={(e) => e.target.src = FoodNotFound} alt="food-image" />
                                <button className="menu__item__cta" onClick={() => addFoodItem(li)}>Add +</button>
                            </div>
                        </li>
                    )

                })
            }
            </div>                                                                      
        </div>                                                                                                          
    )
}

export default RestaurantCategory;
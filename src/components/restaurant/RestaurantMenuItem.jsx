import { IMG_URL } from "../../utils/constants";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";

const RestaurantMenuItem = ({data, addFoodItem}) => {

    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data.card.info;

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
                <button className="menu__item__cta" onClick={() => addFoodItem(data)}>Add +</button>
            </div>
        </li>
    )
}

export default RestaurantMenuItem;
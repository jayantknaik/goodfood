import { IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import FoodNotFound from "../../../assets/images/dummyFood.jpg";

const RestaurantCard = ({resData}) => {

    const {id, name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla} = resData.info ? resData.info : resData;

    return (
        <Link to={"/restaurants/" + id} className="res-card">
            <img className="res-card__img" src={IMG_URL + cloudinaryImageId} onError={(e) => e.target.src = FoodNotFound} alt="res-image" />
            <div className="res-card__info">
                <div className="res-card__row">
                    <div className="res-card__name" title={name}>{name}</div>
                    <div className="res-card__rating">{avgRating}</div>
                </div>
                <div className="res-card__row">
                    <div className="res-card__cuisine">{cuisines.join(", ")}</div>
                    <div className="res-card__price">{costForTwo.includes("for two") ? costForTwo : <><span className="rupees-arial">&#8377;</span><span className="font-inter">{Math.round(costForTwo / 100)}</span> for two</>}</div>
                </div>
                {
                    sla?.deliveryTime && <div className="res-card__eta">{sla.deliveryTime} min</div>
                }
            </div>
        </Link>
    )
}

export const isVeg = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="res-card__veg">
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla} = resData.info;

    return (
        <a href="" className="res-card">
            <img className="res-card__img" src={IMG_URL + cloudinaryImageId} alt="res-image" />
            <div className="res-card__info">
                <div className="res-card__row">
                    <div className="res-card__name">{name}</div>
                    <div className="res-card__rating">{avgRating}</div>
                </div>
                <div className="res-card__row">
                    <div className="res-card__cuisine">{cuisines}</div>
                    <div className="res-card__price">{costForTwo}</div>
                </div>
                <div className="res-card__eta">{sla.deliveryTime} min</div>
            </div>
        </a>
    )
}

export default RestaurantCard;
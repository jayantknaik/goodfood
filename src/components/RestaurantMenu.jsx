import { IMG_URL, MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const { resId }  = useParams();
  const [resInfo, setResInfo] = useState([]);
  const [details, setDetails] =useState({});
  const [menu, setMenu] =useState({});

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId)
    const json = await data.json();
    setResInfo(json.data.cards);
    setDetails(json.data.cards[0].card.card.info);
    setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
  }
  
  if (resInfo.length===0) return <Shimmer />;

  return (
    <div className="menu">
        <img className="menu__img" src={IMG_URL + details.cloudinaryImageId} alt="" />
        <div className="menu__info">
          <div className="menu__info__scroll">
            <div className="menu__info-container first">
              <div className="menu__row">
                <div className="menu__name">{ details.name }</div>
                <div className="menu__rating-container">
                  <div className="menu__rating">{ details.avgRating }</div>
                  <div className="menu__rating-total">{ details.totalRatingsString }</div>
                </div>
              </div>
              <div className="menu__cuisines">{ details.cuisines.join(", ") }</div>
            </div>
            <div className="menu__info-container second">
              <div className="menu__area">{ details.areaName }</div>
              <div className="menu__cost"><span className="rupees-arial">&#8377;</span>{ details.costForTwo / 100 } for two</div>
            </div>
            <div className="menu__info-container third">
              <div className="menu__head">Recommended</div>
              <ul className="menu__list">
                {
                  menu.map((item) => {

                    const {id, name, description, imageId, price} = item.card.info;

                    return (
                      <li key={id} className="menu__item">
                        <div className="menu__item__info">
                          <div className="menu__item__name">{name}</div>
                          <div className="menu__item__cost"><span className="rupees-arial">&#8377;</span>{price/100}</div>
                          <div className="menu__item__desc">{description}</div>
                        </div>
                        <img className="menu__item__image" src={IMG_URL + imageId} alt="food-image" />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RestaurantMenu;
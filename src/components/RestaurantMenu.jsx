import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import useFetchResInfo from '../utils/hooks/useFetchResInfo';
import useFetchResMenu from '../utils/hooks/useFetchResMenu';
import { useEffect } from "react";

const RestaurantMenu = () => {

  const { resId }  = useParams();
  let resInfo = useFetchResInfo(resId);
  let resMenu = useFetchResMenu(resId);
  console.log(resInfo);
  
  if (resInfo.length===0) return <Shimmer />;
  
  return (
    <>
{/*       <div className="menu">
          <img className="menu__img" src={IMG_URL + resInfo.cloudinaryImageId} alt="" />
          <div className="menu__info">
            <div className="menu__info__scroll">
              <div className="menu__info-container first">
                <div className="menu__row">
                  <div className="menu__name">{ resInfo.name }</div>
                  <div className="menu__rating-container">
                    <div className="menu__rating">{ resInfo.avgRating }</div>
                    <div className="menu__rating-total">{ resInfo.totalRatingsString }</div>
                  </div>
                </div>
                <div className="menu__cuisines">{ resInfo.cuisines.join(", ") }</div>
              </div>
              <div className="menu__info-container second">
                <div className="menu__area">{ resInfo.areaName }</div>
                <div className="menu__cost"><span className="rupees-arial">&#8377;</span>{ resInfo.costForTwo / 100 } for two</div>
              </div>
              <div className="menu__info-container third">
                <div className="menu__head">Recommended</div>
                <ul className="menu__list">
                  {
                    resMenu.map((item) => {

                      const {id, name, description, imageId, price, defaultPrice} = item.card.info;

                      return (
                        <li key={id} className="menu__item">
                          <div className="menu__item__info">
                            <div className="menu__item__name">{name}</div>
                            <div className="menu__item__cost"><span className="rupees-arial">&#8377;</span>{price ? price/100 : defaultPrice/100}</div>
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
      </div> */}
      <Footer type="fixed"/>
    </>
  )
}

export default RestaurantMenu;
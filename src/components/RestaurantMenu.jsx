import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState([]);
  const [details, setDetails] =useState({});

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.922464&lng=81.794091&restaurantId=111834')
    const json = await data.json();
    setResInfo(json.data);
    setDetails(json.data.cards[0].card.card.info);
    console.log(details);
  }

  return (resInfo.length===0) ? <Shimmer /> : (
    <div className="menu">
        <div className="menu__name">{ details.name }</div>
        <div className="menu__cuisines">{ details.cuisines.join(", ") }</div>
        <div className="menu__area">{ details.areaName }</div>
        <div className="menu__rating">{ details.avgRating }</div>
        <div className="menu__rating">&#8377;{ details.costForTwo / 100 }</div>
        <ul>
          <li>Biryani</li>
          <li>Burgers</li>
          <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;
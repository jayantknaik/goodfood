import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useFetchResInfo from '../utils/hooks/useFetchResInfo';
import useFetchResCategories from "../utils/hooks/useFetchResCategories";
import { IMG_URL } from "../utils/constants";
import FoodNotFound from "../../assets/images/dummyFood.jpg";
import RestaurantCategory from "../components/restaurant/RestaurantCategory";
import '../scss/pages/menu.scss';

const RestaurantMenu = () => {

    let { resId }  = useParams();
    let resInfo = useFetchResInfo(resId);
    let resCategories = useFetchResCategories(resId);
    const {name, avgRating, totalRatingsString, cuisines, areaName, costForTwo, cloudinaryImageId} = resInfo;
    const [scrollUpArrow, setScrollUpArrow] = useState(false);
    const [isExpanded, setIsExpanded] = useState('cat-0');

    useEffect(() => {

        const handleScroll = () => {

            if(window.scrollY > 100) {
                setScrollUpArrow(true);
            }
            else {
                setScrollUpArrow(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        
    }, [])

    const scrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const toggleCategory = ({id}) => {
        isExpanded === id ? setIsExpanded('') : setIsExpanded(id);
    }

    return resCategories == null ? <Shimmer /> : 
    <>
        <div className="menu">
            <img className="menu__img" src={IMG_URL + cloudinaryImageId} onError={(e) => e.target.src = FoodNotFound} alt="" />
            <div className="menu__info">
                <div className="menu__info__scroll">

                    <div className="menu__info-container first">
                        <div className="menu__row">
                            <div className="menu__name" title={name}>{name}</div>
                            <div className="menu__rating-container">
                            <div className="menu__rating">{avgRating}</div>
                            <div className="menu__rating-total">{totalRatingsString}</div>
                            </div>
                        </div>
                        <div className="menu__cuisines">{cuisines.join(", ")}</div>
                    </div>

                    <div className="menu__info-container second">
                        <div className="menu__area">{areaName}</div>
                        <div className="menu__cost"><span className="rupees-arial">&#8377;</span>{costForTwo/100} for two</div>
                    </div>

                    <div className="menu__info-container third">
                    {
                        resCategories.map((item, index) => {
                        
                        const { title, itemCards } = item.card.card;

                        return (
                            <RestaurantCategory id={`cat-${index}`} key={`cat-${index}`} title={title} itemCards={itemCards} isExpanded={isExpanded} toggleCategory={toggleCategory} />
                        )})
                    }
                    </div>

                </div>
            </div>
            <div className={`menu__scrollUp ${scrollUpArrow ? 'active' : ''}`} onClick={() => scrollUp()}></div>
        </div>

        <Footer />
        
    </>
}

export default RestaurantMenu;
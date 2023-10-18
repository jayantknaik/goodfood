import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);

    const filterRestaurants = () => {
        const filteredLists = listOfRes.filter((res) => res.info.avgRating > 4);
        setListOfRes(filteredLists);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.049488749064965&lng=77.61902712285519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRes(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    }

    return listOfRes.length === 0 ? <Shimmer/> : (
        <main className="body">
{/*             <div className="filter">
                <button className="filter-btn" onClick={filterRestaurants}>Filter &gt; 4</button>
            </div> */}
            <div className="res-container">
                {
                    listOfRes.map((res, index) => {
                        return (
                            <RestaurantCard resData={res} key={index} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Body;
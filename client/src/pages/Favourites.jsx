import { useSelector } from "react-redux";
import "../scss/pages/collection.scss";
import RestaurantCard from "../components/restaurant/RestaurantCard";
import Empty from "../components/cart/Empty";

const Favourites = () => {

    const favRestaurants = useSelector(state => state.cart.favRestaurants);
    console.log(favRestaurants);

    return (
        <>
            {
                favRestaurants.length === 0 ?
                    <Empty
                        title={"You haven't added any favorite restaurants yet! ⭐ Start exploring and save your top picks for easy access later."}
                        cta={"Explore Restaurants"}
                    /> :
                    <div className="collection">
                        <div className="collection__head">Favourites ❤️</div>
                        <div className="collection__desc">A curated list of top dining spots featuring diverse cuisines, exceptional flavors, and unforgettable experiences.</div>
                        <div className="collection__grid">
                            {
                                favRestaurants.map((item, index) => {
                                    return (
                                        <RestaurantCard resData={item} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default Favourites
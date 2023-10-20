import { useOutletContext } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {

    const resListCopy = useOutletContext();

    return resListCopy.length === 0 ? <Shimmer/> : (
        <main className="main">
            <div className="res-container">
                {
                    resListCopy.map((res, index) => {
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
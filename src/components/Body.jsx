import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = ({resListCopy}) => {

    return resListCopy.length === 0 ? <Shimmer/> : (
        <main className="body">
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
import '../scss/pages/collection.scss';
import { useParams } from 'react-router-dom';
import useFetchResCollection from '../utils/hooks/useFetchResCollection';
import Shimmer from '../components/Shimmer';
import RestaurantCard from '../components/restaurant/RestaurantCard';

const Collection = () => {

    const {collectionId, collectionTag, collectionType} = useParams();
    const collectionData = useFetchResCollection({collectionId, collectionTag, collectionType});
    // console.log(collectionData.length);

    return collectionData.length === undefined ? <Shimmer /> : (
        <div className="collection">
            {/* <div className="collection__head">{collectionData[0]?.card?.card?.title}</div>
            <div className="collection__desc">{collectionData[0]?.card?.card?.description}</div> */}
            <div className="collection__grid">
                {
                    collectionData.map((item) => {
                        console.log(item.card.card);
                        <RestaurantCard resData={item.card.card} />
                    })
                }
            </div>
        </div>
    )
}

export default Collection;
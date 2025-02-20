import '../scss/pages/collection.scss';
import { useParams } from 'react-router-dom';
import useFetchResCollection from '../utils/hooks/useFetchResCollection';
import useFetchResCollectionInfo from '../utils/hooks/useFetchResCollectionInfo';
import Shimmer from '../components/Shimmer';
import RestaurantCard from '../components/restaurant/RestaurantCard';

const Collection = () => {

    const {collectionId, collectionTag, collectionType} = useParams();
    const collectionData = useFetchResCollection({collectionId, collectionTag, collectionType});
    const collectionInfo = useFetchResCollectionInfo({collectionId, collectionTag, collectionType});

    console.log(collectionInfo);

    return collectionInfo.length === undefined || collectionData.length === undefined ? <Shimmer /> : (
        <div className="collection">
            <div className="collection__head">{collectionInfo[0]?.card?.card?.title}</div>
            <div className="collection__desc">{collectionInfo[0]?.card?.card?.description}</div>
            <div className="collection__grid">
                {
                    collectionData.map((item, index) => {
                        return (
                            <RestaurantCard resData={item.card.card} key={index} /> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Collection;
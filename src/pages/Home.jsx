import { useOutletContext } from 'react-router-dom';
import RestaurantCard, {isVeg} from '../components/restaurant/RestaurantCard';
import Shimmer from '../components/Shimmer';
import useFetchResPromo from '../utils/hooks/useFetchResPromo';
import { IMG_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import '../scss/pages/home.scss';

const Home = () => {
    
    const resList = useOutletContext();
    const resPromo = useFetchResPromo();
    const VegRestaurantCard = isVeg(RestaurantCard);

    return resList.length === undefined || resPromo === null ? <Shimmer/> : (
        <div className="home">
            <div className="home__head-container">
                <div className="home__head">Order Food At Your Doorstep Now!</div>
            </div>
            <div className="home__title">{resPromo.header.title}</div>
            <div className="home__container" id='offers'>
                <div className="home__swiper">
                    {
                        resPromo.imageGridCards.info.map((promo) => {

                            const { link } = promo.action;
                            const tempLink = new URLSearchParams(link);
                            let collectionId, collectionTag, collectionType; 
                            for (const key of tempLink.entries()) {
                                if (key[0].includes("collection_id")) {
                                    collectionId = key[1];
                                }
                                else if (key[0] === "tags") {
                                    collectionTag = key[1];
                                }
                                else if (key[0] === "type") {
                                    collectionType = key[1];
                                }
                            }

                            return (
                                <Link to={`/collection/${collectionId}/${collectionTag}/${collectionType}`} className="home__swiper__slide" key={promo.id}>
                                    <img className="home__swiper__img" src={IMG_URL + promo.imageId} alt="swiper-img" />
                                </Link>
                            )
                        })
                    } 
                </div>
            </div>
            <div className="home__title">Top restaurant chains in Bangalore</div>
            <div className="home__container" id='topRes'>
                {
                    resList.map((res) => {
                        return (
                            res.info.veg === true ? <VegRestaurantCard resData={res} key={res.info.id} /> : <RestaurantCard resData={res} key={res.info.id} /> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;
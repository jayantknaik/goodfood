import { useOutletContext } from 'react-router-dom';
import RestaurantCard, {withOneBenefits} from '../components/RestaurantCard';
import Shimmer from '../components/Shimmer';
import useFetchResPromo from '../utils/hooks/useFetchResPromo';
import { IMG_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const resList = useOutletContext();
    const resPromo = useFetchResPromo();

    return resList.length === undefined || resPromo === null ? <Shimmer/> : (
        <div className="home">
            <div className="home__head-container">
                <div className="home__head">Order Food At Your Doorstep Now!</div>
            </div>
            <div className="home__title">Best offers for you</div>
            <div className="home__container" id='offers'>
                <div className="home__swiper">
                    {
                        resPromo.map((promo) => {
                            return (
                                <Link to={'/restaurants/'+promo.entityId} className="home__swiper__slide" key={promo.id}>
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
                        console.log(res);
                        return (
                            <RestaurantCard resData={res} key={res.info.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;
import { useOutletContext } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import Shimmer from '../components/Shimmer';

const Home = () => {

    const resList = useOutletContext();

    return resList.length === undefined ? <Shimmer/> : (
        <>
            <main className="main">
                <div className="res-container">
                    {
                        resList.map((res, index) => {
                            return (
                                <RestaurantCard resData={res} key={index} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Home;
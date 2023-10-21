import { useOutletContext } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import Shimmer from '../components/Shimmer';

const Home = () => {

    const resListCopy = useOutletContext();

    return resListCopy.length === 0 ? <Shimmer/> : (
        <>
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
        </>
    )
}

export default Home;
import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../constants";

const useFetchResList = () => {

    const [resList, setResList] = useState({});

    useEffect(() => {
        fetchResList();
    }, []);

    const fetchResList = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return resList;
}

export default useFetchResList;
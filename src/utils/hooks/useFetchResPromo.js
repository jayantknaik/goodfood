import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../constants";

const useFetchResPromo = (resId) => {

    const [resPromo, setResPromo] = useState(null);

    useEffect(() => {
        fetchResPromo();
    }, []);

    const fetchResPromo = async () => {
        const data = await fetch(RESTAURANTS_URL + resId);
        const json = await data.json();
        setResPromo(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }
    return resPromo;
}

export default useFetchResPromo;
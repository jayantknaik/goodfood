import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useFetchResInfo = (resId) => {

    const [resInfo, setResInfo] = useState({});

    useEffect(() => {
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
    }

    return resInfo;
}

export default useFetchResInfo;
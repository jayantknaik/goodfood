import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useFetchResMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchResMenu();
    }, []);

    const fetchResMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }
    return resMenu;
}

export default useFetchResMenu;
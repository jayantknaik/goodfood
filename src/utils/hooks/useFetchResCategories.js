import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useFetchResCategories = (resId) => {

    const [resCategories, setResCategories] = useState(null);

    useEffect(() => {
        fetchResCategories();
    }, []);

    const fetchResCategories = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResCategories(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    }
    return resCategories;
}

export default useFetchResCategories;
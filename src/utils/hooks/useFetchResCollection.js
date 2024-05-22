import { useEffect, useState } from "react"

const useFetchResCollection = ({collectionId, collectionTag, collectionType}) => {

    const [resCollection, setResCollection] = useState({});

    useEffect(() => {
        fetchResCollection();
    }, [])

    const fetchResCollection = async ( ) => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=${collectionId}&tags=${collectionTag}&sortBy=&filters=&type=${collectionType}&offset=0&page_type=null`)
        const json = await data.json();
        setResCollection(json?.data?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"));
    }

    return resCollection;

}

export default useFetchResCollection;
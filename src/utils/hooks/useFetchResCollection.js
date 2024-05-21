import { useEffect, useState } from "react"

const useFetchResCollection = () => {

    const [resCollection, setResCollection] = useState({});

    useEffect(() => {

    }, [])

    const fetchResCollection = async () => {
        const data = await fetch()
    }

    return resCollection;

}

export default useFetchResCollection;
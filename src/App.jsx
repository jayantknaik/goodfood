import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RESTAURANTS_URL } from "./utils/constants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    
    const [resList, setResList] = useState([]);
    const [resListCopy, setResListCopy] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        const resArray = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(resArray);
        setResListCopy(resArray);
    }

    return (
        <div className="app">
            <Header resList={resList} resListCopy={resListCopy} setResListCopy={setResListCopy} />
            <Outlet context={resListCopy}/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
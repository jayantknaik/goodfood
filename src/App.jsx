import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { SWIGGY_API } from "./utils/constants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {

    const [resList, setResList] = useState([]);
    const [resListCopy, setResListCopy] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        const resArray = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(resArray);
        setResListCopy(resArray);
    }

    return (
        <div className="app">
            <Header resList={resList} resListCopy={resListCopy} setResListCopy={setResListCopy} />
            <Body resListCopy={resListCopy} />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    }, 
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
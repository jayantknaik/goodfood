import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RESTAURANTS_URL } from "./utils/constants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./pages/Login";


const AppLayout = () => {
    
    const [resList, setResList] = useState([]);
    const [resListCopy, setResListCopy] = useState([]);
    const [loginBtn, setLoginBtn] = useState('Login');

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
            <Header resList={resList} resListCopy={resListCopy} setResListCopy={setResListCopy} loginBtn={loginBtn} setLoginBtn={setLoginBtn} />
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
                element: <Home />,
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
            {
                path: '/login',
                element: <Login />
            }
        ],
        errorElement: <Error />
    }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
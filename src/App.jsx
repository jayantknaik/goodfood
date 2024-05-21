import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import Login from "./pages/Login";
import useFetchResList from './utils/hooks/useFetchResList';
import Shimmer from "./components/Shimmer";
const RestaurantMenu = lazy(() => import("./pages/RestaurantMenu"));
import { Provider } from "react-redux";
import store from './utils/redux/store';
import Cart from "./pages/Cart";
const Collection = lazy(() => import("./pages/Collection"));

const AppLayout = () => {
    
    let resList = useFetchResList();
    const [loginBtn, setLoginBtn] = useState('Login');

    return (
        <Provider store={store}>
            <div className="app" >
                <Header resList={resList} loginBtn={loginBtn} setLoginBtn={setLoginBtn} />
                <Outlet context={resList}/>
            </div>
        </Provider>
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
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurants/:resId',
                element: <Suspense fallback={<Shimmer/>}><RestaurantMenu /></Suspense>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/collection/:collectionId',
                element: <Suspense fallback={<Shimmer/>}><Collection /></Suspense>
            },
        ],
        errorElement: <Error />
    }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
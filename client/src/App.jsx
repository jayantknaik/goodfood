import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import About from "./pages/About";
import Error from "./components/Error";
import useFetchResList from './utils/hooks/useFetchResList';
import Shimmer from "./components/Shimmer";
const RestaurantMenu = lazy(() => import("./pages/RestaurantMenu"));
import { Provider } from "react-redux";
import store from './utils/redux/store';
import Cart from "./pages/Cart";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import Favourites from "./pages/Favourites";
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
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurants/:resId',
                element: <Suspense fallback={<Shimmer/>}><RestaurantMenu /></Suspense>
            },
            {
                path: '/collection/:collectionId/:collectionTag/:collectionType',
                element: <Suspense fallback={<Shimmer/>}><Collection /></Suspense>
            },
            {
                path: '/payment-success',
                element: <PaymentSuccess />
            },
            {
                path: '/payment-failed',
                element: <PaymentFailed />
            },
            {
                path: '/favourites',
                element: <Favourites />
            },
        ],
        errorElement: <Error />
    }, 
], {basename: "/goodfood"})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
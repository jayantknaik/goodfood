import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">goodfood</div>
                <nav className="nav">
                    <a href="" className="nav-item">Home</a>
                    <a href="" className="nav-item">About Us</a>
                    <a href="" className="nav-item">Contact Us</a>
                    <a href="" className="nav-item">Cart</a>
                </nav>
            </div>
        </header>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <main className="body">
            <div className="search"></div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </main>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
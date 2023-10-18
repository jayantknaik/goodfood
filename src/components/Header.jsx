import { useState } from "react";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">goodfood</div>
                <nav className="nav">
                    <a href="" className="nav-item">Home</a>
                    <a href="" className="nav-item">About Us</a>
                    <a href="" className="nav-item">Contact Us</a>
                    <a href="" className="nav-item">Cart</a>
                    <button className="nav-button" onClick={() => setBtnName('Logout')}>{btnName}</button>
                </nav>
            </div>
        </header>
    )
}

export default Header;
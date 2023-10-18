import { useState } from "react";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    const changeBtnName = (event) => {
        if(btnName === 'Logout') {
            setBtnName('Login');
            event.target.classList.remove('logout');
        }
        else {
            setBtnName('Logout');
            event.target.classList.add('logout');
        }
    }

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">goodfood</div>
                <div className="search-wrapper">
                    <input type="text" id="search" className="search" />
                    <button className="search-button"></button>
                </div>
                <nav className="nav">
                    <a href="" className="nav-item">Home</a>
                    <a href="" className="nav-item">About Us</a>
                    <a href="" className="nav-item">Contact Us</a>
                    <a href="" className="nav-item">Cart</a>
                    <button className="nav-button" onClick={changeBtnName}>{btnName}</button>
                </nav>
            </div>
        </header>
    )
}

export default Header;
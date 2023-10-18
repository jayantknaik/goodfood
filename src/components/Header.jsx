import { useEffect, useState } from "react";
import Search from "./Search";
const Header = ({resListCopy, resList, setResListCopy}) => {

    const [btnName, setBtnName] = useState('Login');

    const changeBtnName = (e) => {
        if(btnName === 'Logout') {
            setBtnName('Login');
            e.target.classList.remove('logout');
        }
        else {
            setBtnName('Logout');
            e.target.classList.add('logout');
        }
    }

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">goodfood</div>
                <Search resListCopy={resListCopy} resList={resList} setResListCopy={setResListCopy} />
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
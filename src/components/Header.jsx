import Search from "./Search";
import { Link } from "react-router-dom";

const Header = ({resListCopy, resList, setResListCopy, loginBtn, setLoginBtn}) => {

    const changeBtnName = (e) => {
        if(loginBtn === 'Logout') {
            setLoginBtn('Login');
            e.target.classList.remove('logout');
        }
        else {
            setLoginBtn('Logout');
            e.target.classList.add('logout');
        }
    }

    return (
        <header className="header">
            <div className="header-wrapper">
                <Link to='/' className="logo">goodfood</Link>
                <Search resList={resList} resListCopy={resListCopy} setResListCopy={setResListCopy} />
                <nav className="nav">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About Us</Link>
                    <Link to="/contact" className="nav-item">Contact Us</Link>
                    <Link to="/" className="nav-item">Cart</Link>
                    <Link to='/login' className="nav-button" onClick={changeBtnName}>{loginBtn}</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;
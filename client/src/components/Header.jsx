import { useSelector } from "react-redux";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = ({resList, loginBtn, setLoginBtn}) => {

    const totalCartItems = useSelector(state => state.cart.totalItems);

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
                <Search resList={resList} />
                <nav className="nav">
                    <Link to="/about" className="nav__item">
                        <div className="nav__item">
                            <div className="nav__item__cnt">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>About
                            </div>
                        </div>
                    </Link>
                    <Link to="/favourites" className="nav__item">
                        <div className="nav__item__cnt">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>Favourites
                        </div>
                    </Link>
                    <Link to="/cart" className="nav__item"> 
                        <div className="nav__item__cnt">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                            Cart
                            <div className="nav__item__cnt__num">{totalCartItems}</div>
                        </div>
                    </Link>
                    {/* <Link to='/login' className="nav__button" onClick={changeBtnName}>{loginBtn}</Link> */}
                </nav>
            </div>
        </header>
    )
}

export default Header;
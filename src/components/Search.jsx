import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({resList}) => {

    const searchBar = useRef(null);
    const searchDD = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const updateInput = (e) => {
        let currText = e.target.value;
        setSearchText(currText);
        currText.length > 0 ? searchDD.current.classList.add('show') : searchDD.current.classList.remove('show');
        setFilteredRestaurants(resList.filter((res) => res.info.name.toLowerCase().includes(currText.toLowerCase())));
    }

    const filterRes = () => {
        searchBar.current.value.length == 0 ? setResListCopy(resList) : setResListCopy(filteredRestaurants);
        setSearchText('');
        searchDD.current.classList.remove('show');
    }
    
    const closeDD = () => {
        setSearchText('');
        searchDD.current.classList.remove('show');
    }

    return (
        <div className="search-container">
            <input type="text" id="search" className="search" ref={searchBar} value={searchText} placeholder="Search Restaurants" autoComplete="off" onChange={(e) => {updateInput(e)}} />
            <button type="button" className="search-button" onClick={filterRes}></button>
            <div className="search__list-wrapper" id="search-dd" ref={searchDD}>
                <div className="search__list">
                    {
                        filteredRestaurants.map((res) => {

                            const {id} = res.info;

                            return (
                                <Link to={'/restaurants/' + id} key={id} className="search__list-item" onClick={closeDD}><div className="search__list-text">{res.info.name}</div></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;
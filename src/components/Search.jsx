import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({resList, resListCopy, setResListCopy}) => {

    let currText;

    const searchBar = document.getElementById('search');
    const searchDD = document.getElementById('search-dd');
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const updateInput = (e) => {
        currText = e.target.value;
        setSearchText(currText);
        currText.length > 0 ? searchDD.classList.add('show') : searchDD.classList.remove('show');
        setFilteredRestaurants(resList.filter((res) => res.info.name.toLowerCase().includes(currText.toLowerCase())));
    }

    const filterRes = () => {
        searchBar.value.length == 0 ? setResListCopy(resList) : setResListCopy(filteredRestaurants);
        setSearchText('');
        searchDD.classList.remove('show');
    }

    const closeDD = () => {
        searchDD.classList.remove('show');
    }

    return (
        <div className="search-container">
            <input type="text" id="search" className="search" value={searchText} placeholder="Search Restaurants" autoComplete="off" onChange={(e) => {updateInput(e)}} />
            <button type="button" className="search-button" onClick={filterRes}></button>
            <div className="search__list-wrapper" id="search-dd">
                <div className="search__list">
                    {
                        filteredRestaurants.map((res) => {
                            console.log(res);
                            return (
                                <Link to={'/restaurants/' + res.info.id} key={res.info.id} className="search__list-item" onClick={closeDD}><div className="search__list-text">{res.info.name}</div></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;
import { useEffect, useState } from "react";

const Search = ({resListCopy, resList, setResListCopy}) => {

    const searchBar = document.getElementById('search');
    const [searchText, setSearchText] = useState('');

    const updateInput = (e) => {
        let currText = e.target.value;
        let searchDD = document.getElementById('search-dd');
        setSearchText(currText);
        searchText.length > 1 ? searchDD.classList.add('show') : searchDD.classList.remove('show');
    }

    const filterRes = () => {
        let filteredRestaurants = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        searchBar.value.length == 0 ? setResListCopy(resList) : setResListCopy(filteredRestaurants);
    }

    return (
        <div className="search-container">
            <input type="text" id="search" className="search" value={searchText} placeholder="Search Restaurants" autoComplete="off" onChange={(e) => {updateInput(e)}} />
            <button type="button" className="search-button" onClick={filterRes}></button>
            <ul className="search__list" id="search-dd">
                <li className="search__list-item">{}</li>
            </ul>
        </div>
    )
}

export default Search;
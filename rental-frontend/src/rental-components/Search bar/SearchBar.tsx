import "./SearchBar.css";

function SearchBar() {
    return (<div className="search-bar">
            <input type="text" className="searchbar" placeholder="Looking for ..."/>
            <svg className="svg-icon">
                <use xlinkHref="../../../public/sprite.svg#icon-magnifying-glass"/>
            </svg>
        </div>);
}

export default SearchBar;
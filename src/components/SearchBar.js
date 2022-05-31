// import "./searchbar.scss";
import { useRef, useContext } from "react";
import CharactersContext from '../store/CharactersContext';

const SearchBar = (props) => {
    const ctx = useContext(CharactersContext)
    const searchRef = useRef();

    async function getSearch(event) {
        event.preventDefault();
        setTimeout(()=>{
            const enteredSearch = searchRef.current.value;
            ctx.updateSearch(enteredSearch);
        }, 300)
        
       
    }
    return (

        <form onSubmit={getSearch} className="searchForm">
            <input
                className="searchInput"
                type="text"
                id="search"
                ref={searchRef}
                onChange={getSearch}
                placeholder="Cautare"
            />
        </form>

    );
};

export default SearchBar; <input type='text' />
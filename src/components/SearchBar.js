// import "./searchbar.scss";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { characters_actions } from "../store/Characters_Slice";
// import CharactersContext from '../store/CharactersContext';

const SearchBar = (props) => {
    const dispatch = useDispatch();
    // const ctx = useContext(CharactersContext)
    const searchRef = useRef();

    async function getSearch(event) {
        event.preventDefault();
        setTimeout(()=>{
            const enteredSearch = searchRef.current.value;
            // ctx.updateSearch(enteredSearch);
            dispatch(characters_actions.updateSearch(enteredSearch));
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
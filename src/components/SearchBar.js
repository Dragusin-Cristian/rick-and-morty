// import "./searchbar.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters_actions } from "../store/Characters_Slice";
// import CharactersContext from '../store/CharactersContext';
import classes from './searchBar.module.css';

const SearchBar = () => {
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
    // const ctx = useContext(CharactersContext)
    const searchRef = useRef(); 

    // keep the  search value
    useEffect(()=>{
        searchRef.current.value = search;
    }, [search])

    async function getSearch(event) {
        event.preventDefault();
        setTimeout(()=>{
            const enteredSearch = searchRef.current.value;
            // ctx.updateSearch(enteredSearch);
            dispatch(characters_actions.updateSearch(enteredSearch));
        }, 300)
        
       
    }
    return (

        <form onSubmit={getSearch} className={classes.searchForm}>
            <input
                className={classes.searchInput}
                type="text"
                id="search"
                ref={searchRef}
                onChange={getSearch}
                placeholder="Search for answers"
            />
        </form>

    );
};

export default SearchBar; <input type='text' />
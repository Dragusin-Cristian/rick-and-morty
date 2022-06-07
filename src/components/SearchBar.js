// import "./searchbar.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characters_actions } from "../store/Characters_Slice";
// import CharactersContext from '../store/CharactersContext';
import classes from './searchBar.module.css';

const SearchBar = () => {
    const search = useSelector(state => state.search);
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();
    // const ctx = useContext(CharactersContext)
    const searchRef = useRef();
    const statusRef = useRef();

    // keep the search and status value
    useEffect(() => {
        searchRef.current.value = search;
        statusRef.current.value = status;
    }, [search, status]);

    const getSearch = async () => {
        const enteredSearch = searchRef.current.value;
            const selectedStatus = statusRef.current ? statusRef.current.value : '';
            console.log(selectedStatus);
            // ctx.updateSearch(enteredSearch);
            dispatch(characters_actions.updateSearch(enteredSearch));
            dispatch(characters_actions.setStatus(selectedStatus));
            fetch(`${process.env.REACT_APP_GET_CHARACTERS}/?name=${enteredSearch}&status=${selectedStatus}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Characters not found');
                })
                .then(response => {
                    console.log(response.results);
                    dispatch(characters_actions.setCharacters(response.results));
                    // dispatch(characters_actions.updateSearch(response.results));
                })
                .catch(error => {
                    console.error(error);
                    //setSearchedItems([]);
                })
    }

    const searchHandler = async (event) => {
        event.preventDefault();
        setTimeout(async () => {
            await getSearch();
        }, 300)
    }
    return (
            <form onSubmit={searchHandler} className={classes.searchForm}>
                <div className={classes.inputContainer}>
                <input
                    className={classes.searchInput}
                    type="text"
                    id="search"
                    ref={searchRef}
                    onChange={searchHandler}
                    placeholder="Search for character name"
                />
               
                    <select name="status" className={classes.statusInput} ref={statusRef} onChange={getSearch}>
                        <option value="">- all statuses -</option>
                        <option value="alive">- alive -</option>
                        <option value="dead">- dead -</option>
                        <option value="unknown">- unknown -</option>
                    </select>
                
                </div>
            </form>
        
    );
};

export default SearchBar; <input type='text' />
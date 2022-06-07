import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../store/Characters_Actions';
// import CharactersContext from './store/CharactersContext';
import CharactersList from '../components/CharactersList';
import SearchBar from '../components/SearchBar';
import PageLayout from '../layouts/PageLayout';

const SearchPage = () => {
    // const ctx = useContext(CharactersContext);
    // const fetchCharacters = ctx.fetchCharacters;
    // fetchCharacters();
    const isFirstLoad = useSelector(state => state.isFirstLoad);
    const dispatch = useDispatch();
    console.log('Rended Search', isFirstLoad);

    useEffect(() => {
        if (isFirstLoad) {
            dispatch(fetchCharacters())
        }
    }, [dispatch, isFirstLoad]);
    return (
        <PageLayout>
            <SearchBar />
            <CharactersList />
        </PageLayout>
    );
};

export default SearchPage;
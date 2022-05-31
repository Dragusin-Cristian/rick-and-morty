import React from 'react';
import CharactersList from '../components/CharactersList';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    return (
        <div>
           <SearchBar />
           <CharactersList />
        </div>
    );
};

export default SearchPage;
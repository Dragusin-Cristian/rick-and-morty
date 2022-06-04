import React from 'react';
import CharactersList from '../components/CharactersList';
import SearchBar from '../components/SearchBar';
import PageLayout from '../layouts/PageLayout';

const SearchPage = () => {
    return (
        <PageLayout>
           <SearchBar />
           <CharactersList />
        </PageLayout>
    );
};

export default SearchPage;
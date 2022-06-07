import React, { useEffect, useState } from 'react';
import classes from './CharactersList.module.css';
import { useSelector } from 'react-redux';
// import CharactersContext from '../store/CharactersContext';
import CharactersListItem from './CharactersListItem';

const CharactersList = () => {
    // const ctx = useContext(CharactersContext);
    // const characters = ctx.characters;
    // const search = ctx.search;
    // const isLoading = ctx.isLoading;
    const characters = useSelector(state => state.characters);
    const search = useSelector(state => state.search);
    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.erroState);

    const [searchedItems, setSearchedItems] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            if (search === '' || search === null) {
                setSearchedItems(characters);
            } else {
                setSearchedItems(characters.filter(c => c.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
                // || c.status.toLowerCase().indexOf(search.toLowerCase()) !== -1 
                ));
            }
        }
    }, [isLoading, characters, search])

    return (
        <div className={classes.charactersList}>
            {isLoading && <p>Loading...</p>}
            {error && <p>Some error occured</p>}
            {(!isLoading && !error) && searchedItems.map(character => {
                return (
                    <CharactersListItem key={character.id}
                        avatar={character.image}
                        name={character.name}
                        status={character.status}
                        id={character.id} />
                )
            })}
        </div>
    );
};

export default CharactersList;
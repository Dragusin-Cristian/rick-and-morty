import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CharactersListContainer, ErrorModal } from './CharactersList.styles';
import CharactersListItem from '../CharactersListItem/CharactersListItem';

const CharactersList = () => {
  const characters = useSelector(state => state.characters);
  const search = useSelector(state => state.search);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.erroState);
  const [searchedItems, setSearchedItems] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setSearchedItems(characters);
    }
  }, [isLoading, characters, search])

  return (
    <CharactersListContainer>
      {isLoading && <p>Loading...</p>}
      {error && <ErrorModal>{error}</ErrorModal>}
      {(!isLoading && !error) && searchedItems.map(character => {
        return (
          <CharactersListItem key={character.id}
            avatar={character.image}
            name={character.name}
            status={character.status}
            id={character.id} />
        )
      })}
    </CharactersListContainer>
  );
};

export default CharactersList;
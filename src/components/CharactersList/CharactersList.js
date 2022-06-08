import { useSelector } from 'react-redux';
import { CharactersListContainer, ErrorMessage } from './CharactersList.styles';
import CharactersListItem from '../CharactersListItem/CharactersListItem';

const CharactersList = () => {
  const characters = useSelector(state => state.characters);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.erroState);

  return (
    <CharactersListContainer>
      {isLoading && <p>Loading...</p>}
      {error && <ErrorMessage>(X_X) {<br/>}{<br/>} {error}</ErrorMessage>}
      {(!isLoading && !error) && characters.map(character => {
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
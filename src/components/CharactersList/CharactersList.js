import { useSelector } from 'react-redux';
import { CharactersListContainer } from './CharactersList.styles';
import { ErrorMessage } from '../Shareable/Shareable';
import CharactersListItem from '../CharactersListItem/CharactersListItem';

const CharactersList = () => {
  const characters = useSelector(state => state.characters);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.erroState);

  return (
    <CharactersListContainer>
      {isLoading && <p>Loading...</p>}
      {error && <ErrorMessage errorMessage={error} />}
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
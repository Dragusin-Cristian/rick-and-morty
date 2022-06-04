// import { useContext } from 'react';
// import CharactersContext from '../store/CharactersContext';
import { useSelector } from 'react-redux';

const CharacterDetailsCard = ({ id }) => {

    let characters = useSelector(state => state.characters);

    const character = characters.find(c => c.id === Number(id))


    return (
        <div>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
            <p>{character.location.name}</p>
            <ul>
                {character.episode.map(e => {
                    return (
                        <li key={e}>
                            {e}
                        </li>
                    )
                })}
            </ul>

        </div>
    );
};

export default CharacterDetailsCard;
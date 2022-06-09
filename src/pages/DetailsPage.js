import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {characters_actions} from '../store/Characters_Slice';
import { ErrorMessage } from '../components/Sharable/Sharabale';
import CharacterDetailsCard from '../components/CharacterDetailsCard/CharacterDetailsCard';
import PageLayout from '../layouts/PageLayout/PageLayout';

// isFirstLoad checks if this is the first page loaded, or 
// is redirected from  the searchPage
// (if is from the searchPage, it will get data from context)
// (if is the first rendered, will send fetch reqs for the data)

const DetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isFirstLoad = useSelector(state => state.isFirstLoad);
  const error = useSelector(state => state.erroState);
  let characters = useSelector(state => state.characters);
  let c = characters.find(c => c.id === Number(params.id))
  const [character, setCharacter] = useState(c);
  const [episodes, setEpisodes] = useState([]);
  const [episodesAreLoaded, setEpisodesAreLoaded] = useState(isFirstLoad ? false : true);

  // Loops through each episode passed as argument,
  // sends a fetch request, and updates the episodes state
  const getEpisodes = useCallback(async (episodes) => {
    let arr = [];
    await (async () => {
      for (let e of episodes) {
        const response = await fetch(e);
        const data = await response.json();
        arr.push(data.name);
      }
    })();
    setEpisodes(arr);
  }, []);

  // fetches the character data || called when isFirstLoad is true
  const getCharacter = useCallback(async () => {
    const response = await fetch(`${process.env.REACT_APP_GET_CHARACTERS}/${params.id}`);
    const data = await response.json();
    return data;
  }, [params.id]);

  useEffect(() => {
    if (isFirstLoad) {
      (async () => {
        const data = await getCharacter();
        if(!data.error){
          setCharacter(data);
          setEpisodesAreLoaded(true);
          getEpisodes(data.episode)
        }else{
          dispatch(characters_actions.setErrorState(data.error));
        }
        
      })();
    } else {
      getEpisodes(character.episode)
    }
  }, [
    getCharacter,
    getEpisodes,
    isFirstLoad]);


  return (
    <PageLayout>
      {error && <ErrorMessage errorMessage={error} />}
      {(episodesAreLoaded && !error) && <CharacterDetailsCard
        image={character.image}
        name={character.name}
        gender={character.gender}
        status={character.status}
        species={character.species}
        origin={character.origin}
        location={character.location}
        episodes={episodes}
      />}
    </PageLayout>
  );
};

export default DetailsPage;
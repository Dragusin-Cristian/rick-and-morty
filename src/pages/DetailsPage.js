import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { charactersActions } from '../store/Characters_Slice';
import { ErrorMessage } from '../components/Shareable/Shareable';
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
    let allEpisodesAreLoaded = false;
    await (async () => {

      const myPromise = new Promise((resolve, reject) => {
        for (let e of episodes) {
          // console.log('before fetch'); // check for each loop
          (async () => {
            try {
              const response = await fetch(e);
              if (!response.ok) throw new Error('Error in getting the episodes');
              const data = await response.json();
              arr.push(data.name);
              // console.log(data.name); // all should be logged after all 'before fetch' logs

              if (episodes.indexOf(e) + 1 === episodes.length) {
                resolve();
              }
            } catch (error) {
              reject(error);
            }
          })();
        }
      });

      myPromise.then(() => {
        // console.log('allEpisodesAreLoaded ', allEpisodesAreLoaded);
        // console.log('arr ', arr);
        setEpisodes(arr);
      }).catch((err) => {
        dispatch(charactersActions.setErrorState(err.message));
      });
      allEpisodesAreLoaded = true;
    })();



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
        if (!data.error) {
          setCharacter(data);
          setEpisodesAreLoaded(true);
          getEpisodes(data.episode)
        } else {
          dispatch(charactersActions.setErrorState(data.error));
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
        character={character}
        episodes={episodes}
      />}
    </PageLayout>
  );
};

export default DetailsPage;
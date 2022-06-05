import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CharacterDetailsCard from '../components/CharacterDetailsCard';
import PageLayout from '../layouts/PageLayout';

const DetailsPage = () => {
    // checks if this is the first page loaded, or 
    // is redirected from  the searchPage
    // (if is from the searchPage, it will get data from context)
    // (if is the first rendered, will send fetch reqs for the data)
    const isFirstLoad = useSelector(state => state.isFirstLoad);
    console.log(isFirstLoad);
    const params = useParams();
    let characters = useSelector(state => state.characters);
    let c = characters.find(c => c.id === Number(params.id))
    const [character, setCharacter] = useState(c);
    const [episodes, setEpisodes] = useState([]);
    const [episodesAreLoaded, setEpisodesAreChanged] = useState(isFirstLoad ? false : true);

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
        const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
        const data = await response.json();
        return data;
    }, [params.id]);

    useEffect(() => {
        if (isFirstLoad) {
            (async () => {
                const data = await getCharacter();
                setCharacter(data);
                setEpisodesAreChanged(true);
                getEpisodes(data.episode)
            })();
        } else {
            getEpisodes(character.episode)
        }
    }, [
        // character.episode, // triggers infinite loop
        getCharacter,
        getEpisodes,
        isFirstLoad]);


    return (
        <PageLayout>
            {episodesAreLoaded && <CharacterDetailsCard
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
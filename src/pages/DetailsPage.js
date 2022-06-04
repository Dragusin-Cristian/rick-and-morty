import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CharacterDetailsCard from '../components/CharacterDetailsCard';
import PageLayout from '../layouts/PageLayout';

const DetailsPage = () => {
    const isFirstLoad = useSelector(state => state.isFirstLoad);
    console.log(isFirstLoad);
    const params = useParams();
    let characters = useSelector(state => state.characters);
    const character = characters.find(c => c.id === Number(params.id))
    const [episodes, setEpisodes] = useState([]);


    const getEp = useCallback(() => {
        // PAGE REFRESH FEATURE
        // fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        for (let e of character.episode) {
            fetch(e)
                .then(response => response.json())
                .then(data => {
                    setEpisodes(ep => ep.concat(data.name));
                })
        }
    }, []);

    useEffect(() => {
        getEp();
    }, []);


    return (
        <PageLayout>
            <CharacterDetailsCard
                image={character.image}
                name={character.name}
                gender={character.gender}
                status={character.status}
                species={character.species}
                origin={character.origin}
                location={character.location}
                episodes={episodes} />
        </PageLayout>
    );
};

export default DetailsPage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CharacterDetailsCard from '../components/CharacterDetailsCard';

const DetailsPage = () => {
    const params = useParams();
    return (
        <div>
            <Link to='/characters'>back to search page</Link>
            <CharacterDetailsCard id={params.id} />

        </div>
    );
};

export default DetailsPage;
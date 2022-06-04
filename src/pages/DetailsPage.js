import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CharacterDetailsCard from '../components/CharacterDetailsCard';
import PageLayout from '../layouts/PageLayout';

const DetailsPage = () => {
    const params = useParams();
    return (
        <PageLayout>
            <Link to='/characters'>back to search page</Link>
            <CharacterDetailsCard id={params.id} />

        </PageLayout>
    );
};

export default DetailsPage;
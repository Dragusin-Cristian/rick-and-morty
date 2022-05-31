import React from 'react';
import CardLayout from '../layouts/CardLayout';
import classes from './CharactersListItem.module.css';
import { Link } from 'react-router-dom';

const CharactersListItem = ({ avatar, name, status, id }) => {
    return (
        <Link to={`${id}`}>
            <CardLayout>
                <img src={avatar} alt={name} className={classes.avatar} />
                <div>
                    <p>{name}</p>
                    <p>{status}</p>
                </div>
            </CardLayout>
        </Link>
    );
}
export default CharactersListItem;
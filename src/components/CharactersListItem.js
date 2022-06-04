import React from 'react';
import classes from './CharactersListItem.module.css';
import { Link } from 'react-router-dom';

const CharactersListItem = ({ avatar, name, status, id }) => {
    return (
        <Link to={`${id}`}>
            <div className={classes.growCont}>
            <div className={classes.card}>
                <img src={avatar} alt="Avatar" className={classes.avatar} />
                    <div className={classes.container}>
                        <span className={classes.itemData}>
                        <h4 className={classes.itemName}>{name}</h4>
                        <p className={classes.itemStatus}>-{status.toLowerCase()}-</p>
                        </span>
                        
                    </div>
            </div>
            </div>
            
        </Link>
    );
}
export default CharactersListItem;
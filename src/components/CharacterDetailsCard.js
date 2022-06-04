// import { useContext } from 'react';
// import CharactersContext from '../store/CharactersContext';
import classes from './CharacterDetailsCard.module.css';

const genderBadgeStyle = (gender) => {
    let backgroundColor;

    switch (gender) {
        case 'Male':
            backgroundColor = 'blue'
            break;
        case 'Female':
            backgroundColor = '#FF008A'
            break;
        default:
            backgroundColor = 'grey'
    }

    return {
        border: `1px solid ${backgroundColor}`,
        borderRadius: '20px',
        padding: '2px 10px',
        backgroundColor: backgroundColor
    }
}

const CharacterDetailsCard = ({ image, name, gender, status, species, origin, location, episodes }) => {
    return (
        <div className={classes.card}>
            <div>
                <img src={image} alt="Avatar" className={classes.avatar} />
                <div className={classes.blackFade}></div>
            </div>

            <div className={classes.dataContainer}>
                <div className={classes.headerCont}>
                    <h1>{name}</h1>
                    <div style={genderBadgeStyle(gender)}>
                        <p>{gender}</p>
                    </div>
                </div>

                <p>- status: {status}</p>
                <p>- species: {species}</p>
                <p>- origin: {origin.name}</p>
                <p>- location: {location.name}</p>
                <p>- episodes:</p>
                <div className={classes.episodesContainer}>
                    <ul>
                        {episodes.map(e => {
                            return (
                                <li key={e}><p>{e}</p></li>
                            )
                        })}
                    </ul>
                </div>

            </div>




        </div>

    );
};

export default CharacterDetailsCard;
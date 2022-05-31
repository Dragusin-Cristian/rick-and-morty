import React from 'react';
import classes from './CardLayout.module.css';

const CardLayout = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
};

export default CardLayout;
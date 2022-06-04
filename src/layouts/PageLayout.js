import React from 'react';
import classes from './PageLayout.module.css';

const PageLayout = (props) => {
    return (
        <div className={classes.pageLayout}>
            {props.children}
        </div>
    );
};

export default PageLayout;
import '../App.css';
import React from 'react';

const AppLayout = (props) => {
    return (
        <div className='App'>
            {props.children}
        </div>
    );
};

export default AppLayout;
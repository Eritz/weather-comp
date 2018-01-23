import React from 'react';
import classes from './FloatingButton.css';

const floatingButton = (props) => {
    return(
        <div className={classes.FloatingButton} onClick={props.click}>
            <p className={classes.Plus}>+</p>
        </div>
    );
}

export default floatingButton;
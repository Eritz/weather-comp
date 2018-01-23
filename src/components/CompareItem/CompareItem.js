import React from 'react';

import classes from './CompareItem.css';

const compareitem = (props) => {
    return(
        <div className={classes.CompareItem} onClick={props.isChosen}>
            <p>{props.itemName}</p>
        </div>
    );
}

export default compareitem;
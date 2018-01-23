import React from 'react';
import PlacesAutoComplete from 'react-places-autocomplete';

import classes from './ModalLink.css';

const modalLink = props => {

    const stopEnterButton = (event) => {
        event.preventDefault();
    }

    const onError = (status) => {
        console.log('Google Maps API returned error with status: ', status)
    }

    const options = {
        types: ['geocode'],
        offset: 3,
    }

    return(
        <div className={classes.ModalLink}>
            <PlacesAutoComplete  
                onSubmit={stopEnterButton}
                inputProps={props.inputProps}
                options={options}
                onError={onError}>
            </PlacesAutoComplete>
            <div className={classes.ButtonContainer}>
                <button 
                    className={classes.DeleteLink}
                    onClick={props.delNewLink}>x</button>
                <button 
                    className={classes.AddLink}
                    onClick={props.addNewLink}
                >+</button>
            </div>
            <br/>
        </div>
        
    );
};

export default modalLink;
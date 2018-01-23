import * as actionTypes from '../actions/actions';
import uuid from 'uuid';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

// Each array holds an object
const initialState = {
    locations: [{
        id: uuid.v1(),
        location: '',
        lat: '',
        long: '',
        info: {currently: {}, daily: {}, hourly:{}},
        isActive: false,
        hasInfo: false,
    }],
}

// Reducer for the FindModal
const reducer = (state=initialState, action) => {
    switch (action.type) {
        
        // Add a new location in modal
        case actionTypes.ADD_SPACE:
            return {
                ...state,
                locations: state.locations.concat({id: uuid.v1(), location: '', lat: '', long: '', 
                            info: {currently: {}, daily: {}, hourly: {}}, isActive: false, hasInfo: false,}),
            }

        // Delete the current location in modal
        case actionTypes.DEL_SPACE:
            if ([...state.locations].length > 1) {
                const updatedArray = state.locations.filter(ele => ele.id !== action.uniqueID);
                return {
                    ...state,
                    locations: updatedArray,
                }
            }
            break;

        // Delete all locations in modal, and restore back to a single line
        case actionTypes.CLEAR_ALL:
            return {
                locations: [{id: uuid.v1(), location: '', lat: '', long: '', 
                            info: {currently: {}, daily: {}, hourly: {}}, isActive: false, hasInfo: false}],
            }
        
        // Add the entered location into the state
        case actionTypes.ADD_TEXT:
            const updatedArray = [...state.locations];
            
            updatedArray[action.index].location = action.value;
            return {
                ...state,
                locations: updatedArray,
            }
        
        // Get the Langitude and Longitude
        case actionTypes.GET_LAT_LNG:
            const locationArray = [...state.locations];
            
            geocodeByAddress(locationArray[action.index].location)
                .then(results => getLatLng(results[0]))
                .then(({lat,lng}) => {
                    locationArray[action.index].lat = lat;
                    locationArray[action.index].long = lng;
                    return {
                        ...state,
                        locations: locationArray,
                    }
                })
                .catch(error => {
                    return {
                        ...state
                    }});
            break;
        default:
            return state;
    }
    return state;
}

export default reducer;


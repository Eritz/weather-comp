import * as actionTypes from './actions.js';

export const clearAll = () => {
    return {
        type: actionTypes.CLEAR_ALL,
    }
}

export const addSpace = () => {
    return {
        type: actionTypes.ADD_SPACE,
    }
}

export const delSpace = (val) => {
    return {
        type: actionTypes.DEL_SPACE,
        uniqueID: val,
    }
}

export const addLinkText = (address, index) => {
    let text = address;
    return {
        type: actionTypes.ADD_TEXT,
        value: text,
        index: index,
    }
}

export const getLatLng = (index) => {
    return {
        type: actionTypes.GET_LAT_LNG,
        index: index,
    }
}




import * as actionTypes from './actions.js';
import weatherInstance from '../../axios';

export const parseLinks = (links) => {
    return {
        type: actionTypes.PARSE_ALL,
        passed: links,
    }
}


export const changeActive = (id, data) => {
    return {
        type: actionTypes.CHANGE_ACTIVE,
        value: id,
        response: data,
    }
}

export const changeActiveFromList = (id, lat, lng, active) => {
    const req = lat+","+lng;
    
    if (active === false) { 
        return (dispatch) => {
            dispatch(getWebInfoPending())
            weatherInstance.get(req, {
                params: {exclude:"alerts,flags,minutely"}
            })
            .then(response => response.data)
            .then(data => dispatch(changeActive(id, data)))
            .catch(error => dispatch(getWebInfoError(error)))
        }
    } else { // No need to waste time and call the API
        return (dispatch) => {
            dispatch(changeActive(id, ""))
        }
    }
}

export const deleteSelectedFromList = (id) => {
    return {
        type: actionTypes.DELETE_SELECTED,
        value: id,
    }
}

export const deleteAllFromList = () => {
    return {
        type: actionTypes.DELETE_ALL_LIST,
    }
}

export const getWebInfoPending = () => {
    return {
        type: actionTypes.WEB_PENDING,
        value: true,
    }
}

export const getWebInfoError = (error) => {
    return {
        type: actionTypes.WEB_PENDING_ERROR,
        value: false,
        error: error,
    }
}

export const changeListUnits = () => {
    return {
        type: actionTypes.CHANGE_UNITS,
    }
}
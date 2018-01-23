import React from 'react';
import classes from './Currently.css';

const currently = (props) => {
    return (
        <div className={classes.Current}>
            <p>What's happening:<br/><span style={{color:"black"}}>{props.currentSummary}</span></p>
            <p>Precipitation:
            <span style={{color:"black"}}>{props.currentPrecipType}<span> ({props.currentPrecipProb}%)</span></span></p>
            <p>Humidity: <span style={{color:"black"}}>{props.currentHumidity}%</span></p>
            <p>Wind spd: <span style={{color:"black"}}>{props.currentWindSpeed}{props.units ? " mph" : " m/s"}</span></p>
        </div>
    );
}

export default currently;
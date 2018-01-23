import React from 'react';
import classes from './Hourly.css';

const hourly = (props) => {
    return (
        <div className={classes.Hour}>
            <div className={classes.HourTime}>
                {props.hourIcon}
                <p>{props.hourIconSummary}</p>
                <p>{props.hourTime}</p>
            </div>
            <div className={classes.HourForecast}>
                <p>Temp: {props.hourTemp}&#176;{props.units ? "F" : "C"}</p>
                <p className={classes.HourPrecipType}>{props.hourPrecipType}</p>
                <p>Precipitation: {props.hourPrecipProb}%</p>
                <p>Humidity: {props.hourHumidity}%</p>
            </div>
        </div>
    );
}

export default hourly;
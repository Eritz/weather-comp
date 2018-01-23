import React from 'react';
import classes from './Daily.css';

const daily = (props) => {
    return (
        <div className={classes.Daily}>
            <div className={classes.TheDay}>
                {props.dailyIcon}
                <p>{props.dailyIconSummary}</p>
                <p>{props.dailyTime}</p>
            </div>
            <div className={classes.DailyHigh}>
                <p>{props.dailyTempHigh}&#176;{props.units ? "F" : "C"}</p>
            </div>
            <div className={classes.DailyLow}>
                <p>{props.dailyTempLow}&#176;{props.units ? "F" : "C"}</p>
            </div>
        </div>
    );
}

export default daily;
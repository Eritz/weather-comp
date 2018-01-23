import React from 'react';
import classes from './Weather.css';

const weather = (props) => {

    return (
        <div className={classes.Weather}>
            <header className={classes.ActiveLocation}>
                <div className={classes.ActiveLocation_Container}>
                    <div className={classes.ActiveLocation_Icon}>
                        {props.icon}
                    </div>
                    <div className={classes.ActiveLocation_Detail_Container}>
                        <p className={classes.ActiveLocation_Title}>{props.title}</p>
                        <div className={classes.ActiveLocation_Temp}>
                            <p>Feels like: {props.feelsLike}&#176;{props.units ? "F" : "C"}</p>
                            <p>L: {props.todayLow} <span style={{color: "rgb(133, 5, 133)"}}>/</span> H: {props.todayHigh}</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className={classes.LocationInfo}>
                <section className={classes.Currently}>
                    <h1>CURRENTLY</h1>
                    {props.Currently}
                </section>
                
                <section className={classes.Hourly}>
                <h1>HOURLY</h1>
                    <div className={classes.HourHeader}>
                        <div className={classes.HourTimeCol}><p>Time</p></div>
                        <div className={classes.HourForecastCol}><p>Forecast</p></div>
                    </div>
                    {props.Hourly}
                </section>

                <section className={classes.Week} id="week">
                    <h1>Day-To-Day</h1>
                    <div className={classes.WeekHeader}>
                        <div className={classes.WeekDayCol}><p>Day</p></div>
                        <div className={classes.WeekLowCol}><p>Low</p></div>
                        <div className={classes.WeekHighCol}><p>High</p></div>
                    </div>
                    {props.Week}
                </section>
            </div>
            
        </div>
    );
}

export default weather;
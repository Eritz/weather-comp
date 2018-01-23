import React from 'react';
import classes from './AboutModal.css';

const aboutModal = (props) => {
    return (
        <div className={classes.AboutModal}>
            <h3>What is this site?</h3>
            <p>Built using ReactJS, this website allows quickly comparing the weather
                of multiple locations at the same time. The information supplied is the bare
                minimum (atleast, for me).
                <br/> <br/>
                Searching is powered by the Google Maps API,
                and the weather information is supplied through Dark Sky.
            </p>

            <h3>How do I use this site?</h3>
            <p>Press the + button to start your search.
                <br/>
                Add locations using the search box, then add them to the menu.
                <br/>
                Click on the location(s) of interest, and enjoy.
            </p>

            <h3>What are the <span style={{color:"rgb(255, 153, 0)"}}>Mode</span>,
            <span style={{color:"#7ee213"}}> F</span><span style={{color:"black"}}>/</span><span style={{color:"#7ee213"}}>C</span>,
            <span style={{color:"rgb(199, 83, 83)"}}> Empty</span> options in the menu?</h3>
            <p><span style={{color:"rgb(255, 153, 0)"}}>Mode</span> toggles between <i>Compare</i> and <i>Delete</i>.<br/>
                <i>Compare</i> allows selecting an item and viewing its info to the right.
                <i>Delete</i> will delete selected items.
                <br/>
                <br/>
                <span style={{color:"#7ee213"}}>F<span style={{color:"black"}}>/</span>C</span> toggles between <i>Fahrenheit/miles-per-hour</i> and
                <i>Celcius/meters-per-second</i>.
                <br/>
                <br/>
                <span style={{color:"rgb(199, 83, 83)"}}>Empty</span> will delete all locations from the menu.
            </p>

            <h3>I typed a location, and can't see it in the menu. Why?</h3>
            <p>First, try again. If the issue continues, then Google Maps does
                not have a given latitude/longitude for the location. Therefore,
                it will not be displayed in the menu.
            </p>

            <h3>Why is this site using 2 separate APIs? Why not just use Dark Sky's API to 
                do everything?</h3>
            <p>Dark Sky's API requires the latitude/longitude for sending requests.
                Unfortunately (as of Jan 2018), it does not support geocoding of a given address;
                thus, it requires a different API for that role.
            </p>

            <h3>I'm seeing <i>Network Error</i> in my browser after clicking a location in menu.</h3>
            <p>Check your <i>NoScript/uMatrix</i> and <i>AdBlock</i> settings. If the issue persists, Dark Sky probably cannot search your location at the moment.
            </p>
        <div/>
        </div>
    );
  
}

export default aboutModal;
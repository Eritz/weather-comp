import React, { Component } from 'react';

import classes from './WeatherSection.css';
import Weather from '../../components/Weather/Weather';
import Currently from '../../components/Weather/Currently/Currently';
import Hourly from '../../components/Weather/Hourly/Hourly';
import Daily from '../../components/Weather/Daily/Daily';
import getIcon from '../../components/Weather/getIcon';
import Skycons from 'react-skycons';
import moment from 'moment';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

class WeatherSection extends Component {

    convertFahToCel = (fah, num) => {
        let cel = (fah - 32)/(1.8);
        return cel = cel.toFixed(num);
    }

    convertMilesHrToMeterSec = (mph) => {
        let met = (mph * 0.44704);
        return met = met.toFixed(1);
    }

    render() {

        const activeWeathers = this.props.weatherList.filter(ele => ele.isActive === true)
            .map(ele => {
                let currPrecipProb = ele.info.currently.precipProbability;
                let currHumidity = ele.info.currently.humidity;
                let hourly = ele.info.hourly.data;
                let daily = ele.info.daily.data;
                let locationIcon = getIcon(ele.info.currently.icon);
                
                hourly = hourly.slice(0,13)

                return <Weather
                    key={ele.id}
                    title={ele.location}
                    units={this.props.currentUnits}
                    feelsLike={this.props.currentUnits ? 
                        ele.info.currently.apparentTemperature : 
                        this.convertFahToCel(ele.info.currently.apparentTemperature,2)}
                    todayLow={this.props.currentUnits ?
                        daily[0].temperatureLow.toFixed(1) :
                        this.convertFahToCel(daily[0].temperatureLow,1)}
                    todayHigh={this.props.currentUnits ?
                        daily[0].temperatureHigh.toFixed(1) :
                        this.convertFahToCel(daily[0].temperatureHigh,1)}
                    icon={<Skycons
                        color='black'
                        icon={locationIcon}
                        />
                    }
                    Currently={
                        <Currently
                            units={this.props.currentUnits}
                            currentSummary={ele.info.currently.summary}
                            currentPrecipType={ele.info.currently.precipType}
                            currentPrecipProb={Math.ceil(currPrecipProb*100)}
                            currentHumidity={Math.ceil(currHumidity*100)}
                            currentWindSpeed={this.props.currentUnits ?
                                ele.info.currently.windSpeed :
                                this.convertMilesHrToMeterSec(ele.info.currently.windSpeed)}
                        />}
                    Hourly={hourly.map(h=>{
                        let icon = getIcon(h.icon);
                        let iconSummary = h.icon.replace(/-/g," ");
                        
                        let hourPrecipProb = h.precipProbability;
                        let hourHumidity = h.humidity;
                        return <Hourly
                            key={h.time}
                            units={this.props.currentUnits}
                            hourIcon={<Skycons
                                color='black'
                                icon={icon}
                                style={{width:"100%", height:"35%", marginTop:"15%"}}/>
                            }
                            hourIconSummary={iconSummary}
                            hourTime={moment.unix(h.time).format("HH:mm")}
                            hourTemp={this.props.currentUnits ?
                                 h.temperature : 
                                 this.convertFahToCel(h.temperature,2)}
                            hourPrecipType={h.precipType}
                            hourPrecipProb={Math.ceil(hourPrecipProb*100)}
                            hourHumidity={Math.ceil(hourHumidity*100)}
                        />
                    })}
                    Week={daily.map(day => {
                        let dayIcon = getIcon(day.icon);
                        let dailySummary = day.icon.replace(/-/g, " ");
                        return <Daily
                            key={day.time}
                            units={this.props.currentUnits}
                            dailyIcon={<Skycons
                                color='black'
                                icon={dayIcon}
                                style={{width:"100%", height: "35%", marginTop: "20%"}}/>
                            }
                            dailyIconSummary={dailySummary}
                            dailyTime={moment.unix(day.time).format("ddd")}
                            dailyTempHigh={this.props.currentUnits ?
                                day.temperatureHigh : 
                                this.convertFahToCel(day.temperatureHigh,2)}
                            dailyTempLow={this.props.currentUnits ?
                                day.temperatureLow : 
                                this.convertFahToCel(day.temperatureLow,2)}
                        />
                    })}
                    />
            });
        
        return(
            <div className={classes.WeatherSection}>
                {activeWeathers}
                {this.props.isPending ? <Spinner/> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        weatherList: state.listRedu.finalList,
        isPending: state.listRedu.isLoading,
        currentUnits: state.listRedu.isAmerican,
    };
}


export default connect(mapStateToProps)(WeatherSection);
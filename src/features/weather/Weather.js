import React, { useEffect } from 'react';
import { BsFillCloudSunFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { selectWeatherData } from './weatherSlice';
import { fetchWeatherData } from './weatherSlice';


export default function Weather() {
    const dispatch = useDispatch();
    let weatherData = useSelector(selectWeatherData);
    let main = "Sunny";
    let description = "Partly sunny";
    let temperature = "267";
    let city = "Accra";
    let humidity = "80";




    useEffect(() => {
        dispatch(fetchWeatherData());


        // main = weatherData.weather.weather[0].main;
        // description = weatherData.weather.weather[0].description;
        // temperature = weatherData.weather.main.temp;
        // city = weatherData.weather.name;
        // humidity = weatherData.weather.main.humidity;

        //console.log(JSON.stringify(weatherData.weather, null, 2))
    }, []);


    return (
        <div className='wheather-main'>
            <h3 className='weather-title'>Weather</h3>
            <div className='weather'>
                <div className='weather-details'>
                    <p className='city'>{city}</p>
                    <p className='date'>May 20, 2023</p>
                    <p className='temperature'>Temperature: {temperature} <sup>0</sup> F </p>
                    <p className='temperature'>Humidity: {humidity}% </p>
                </div>
                <div>
                    <span><BsFillCloudSunFill /></span>
                    <br />
                    <p className='desc'>{main}</p>
                </div>
            </div>
        </div>
    )
}

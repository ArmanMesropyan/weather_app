import axios from 'axios';
import React, { useState   } from 'react';
import Form from './components/form';
import Info from './components/info';
import Weather from './components/weather';
import './components/scss/app.scss'

function App() {
  const initialState = {
    temp:undefined,
    time:undefined,
    weatherForecast:undefined,
    coutry:undefined,
    humidity:undefined,
    wind:undefined,
    sunrise:undefined,
    sunset:undefined,
    error:undefined,
  }
  const [state, setState] =   useState(initialState)


  const  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value
    let data 
  
    if(city){
      const API_KEY = '33HFRK92JYZSEGUCBL9BARM3C'
    
      await axios(` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${API_KEY} `)
      .then((response) => data = response.data)
      
      setState({
        temp:Math.round((data.currentConditions.temp - 32) *5/9 ),
        time:data.currentConditions.datetime,
        weatherForecast:data.currentConditions.icon,
        country:data.address,
        humidity:data.currentConditions.humidity,
        wind:data.currentConditions.windspeed,
        sunrise:data.currentConditions.sunrise,
        sunset:data.currentConditions.sunset,
        error:''
      })
    }else{
      setState({
        temp:undefined,
        time:undefined,
        weatherForecast:undefined,
        coutry:undefined,
        humidity:undefined,
        wind:undefined,
        sunrise:undefined,
        sunset:undefined,
        error:"Enter the name of the city",
      })
    }
  
  
    
  }
  

  return (
    <div className="App">
        <Info/>
        <div className='card__weather'>
            <Form getWeather={getWeather}/>
            <Weather
            temp={state.temp}
            city={state.city}
            time={state.time}
            Forecast={state.weatherForecast}
            country={state.country}
            humidity={state.humidity}
            wind={state.wind}
            sunset={state.sunset}
            sunrise={state.sunrise}
            error={state.error}
            />
        </div>
   
    </div>
  );
}

export default App;

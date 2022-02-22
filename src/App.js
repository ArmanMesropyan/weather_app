import axios from 'axios';
import React, { useState   } from 'react';
import Form from './components/form';
import Info from './components/info';
import Weather from './components/weather';
import './components/scss/app.scss'

function App() {
  const initialState = {
    temp:undefined,
    city:undefined,
    time:undefined,
    weatherForecast:undefined,
    coutry:undefined,
    humidity:undefined,
    wind:undefined,
    icon:undefined,
    error:undefined,
  }
  const [state, setState] =   useState(initialState)



  const  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value
    let data 
  
    if(city){
      const API_KEY = '4a60b042ab2b1d5db5f3e058eaf77de5'
      await axios(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
      .then((response) => data = response.data)
      

      setState({
        temp:data.current.temperature,
        city:data.location.name,
        time:data.location.localtime,
        weatherForecast:data.current.weather_descriptions[0],
        country:data.location.country,
        humidity:data.current.humidity,
        wind:data.current.wind_speed,
        icon:data.current.weather_icons[0],
        error:''
      })
    }else{
      setState({
        temp:undefined,
        city:undefined,
        time:undefined,
        weatherForecast:undefined,
        coutry:undefined,
        humidity:undefined,
        wind:undefined,
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
            icon={state.icon}
            error={state.error}
            />
        </div>
   
    </div>
  );
}

export default App;

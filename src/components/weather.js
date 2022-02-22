import React, { Component } from 'react'
import './scss/weather.scss'
 class Weather extends Component {
  render() {
    return (
      <div className='weather__wrapp'>
        {this.props.city &&
            <div className='weather__inf'>
                <p className='temperature'>{this.props.temp}<sup>℃</sup></p> 
                <p className='country'>{this.props.country}</p> 
                <p className='location'>{this.props.city}</p> 



                    <div className='weather__block'>
                        <div className='child__weath'>
                          <img src={this.props.icon} alt="Weather__icon" />
                        </div>
                        <div className='child__weath'>
                           <p>Weather Forecast: <span>{this.props.Forecast}</span> </p>
                           <p>humidity: <span>{this.props.humidity}%</span> </p> 
                           <p>wind speed: <span>{this.props.wind}km/h</span> </p>
                        </div>

                    </div>

                <p className='date'>Date and Time:{this.props.time}</p> 
               
               
               
            </div>
        }
        <p className='error'>{this.props.error}</p>
          
      </div>
    )
  }
}
export default Weather
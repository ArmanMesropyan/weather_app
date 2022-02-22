import React, { Component } from 'react'
import './scss/form.scss'

 class Form extends Component {

    render() {
    return (
      <div className = 'form__wrapper'>
          <form onSubmit={this.props.getWeather}>
              <input type="text" name='city' placeholder='write your city' />
              <button>Search</button>
          </form>
      </div>
    )
  }
}
export default Form
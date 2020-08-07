import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './form';
const apiKey = 'dd4b2c0bf6ced9e46923c2c31cc3b825';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			city: undefined,
			country: undefined,
			main: undefined,
			celsius: undefined,
			temp_max: undefined,
			temp_min: undefined,
			description: '',
			error: false
		};
		//this.getWeather();
	}

	calCelsius(temp){
		let cell = Math.floor(temp-273.15);
		return cell;
	}
	//Calling a Api
	getWeather = async(e) =>{
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		if(city && country){
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country},uk&appid=${apiKey}`);
		const response = await api_call.json();
		this.setState({
			city: response.name,
			country: response.sys.country,
			celsius: this.calCelsius(response.main.temp),
			temp_max: this.calCelsius(response.main.temp_max),
			temp_min: this.calCelsius(response.main.temp_min),
			description: response.weather[0].description
		})
		//console.log(response);
		//console.log(response.weather[0].description);
	}else{
		this.setState({error:true});
	}
	};
render(){
  return (
	  <div className ="App">
	  <Form loadweather = {this.getWeather} error={this.state.error}/>
	  <Weather 
	  city={this.state.city} 
	  country={this.state.country} 
	  temp_celsius={this.state.celsius} 
	  temp_min={this.state.temp_max} 
	  temp_max={this.state.temp_min}
	  description = {this.state.description}
	  />
	  </div>
  );
}
}

export default App;

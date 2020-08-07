import React from 'react';
import './weather.css';

const Weather = (props) =>{
	return(
		<div className = "container">
			<div className="cards">
				<h1>{props.city} {props.country}</h1>
				{props.temp_celsius?(<h1 className="py-2">{props.temp_celsius}&deg;c</h1>): null}	

				{/*Calling max and minn **/}
				
				{maxmin(props.temp_min,props.temp_max)}
				<h4 className="description">{props.description}</h4>
				
			</div>
		</div>
	);
};


function maxmin(max,min){
	if(min && max){
	return(
		<h4>
		<span className="px-4">{max}&deg;c</span>
		<span className="px-4">{min}&deg;c</span>
		</h4>
	);
}
}

export default Weather;



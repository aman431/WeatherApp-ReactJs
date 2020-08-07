import React from 'react';
import './form.css';

const form = props =>{
	return(
		<div className ="cointainer">
		<div>{props.error ? error():null}</div>
		<form onSubmit = {props.loadweather}>
		<div className="row">
		<div className="col-md-3 offset-md-2">
		<input type="text" className="form_control" placeholder="City" name="city" />
		</div>
		<div className = "col-md-3">
		<input type="text" className="form_control" placeholder="Country" name="country" />
		</div>
		<div className="col-md-3">
		<button className="btn">Get Weather</button>
		</div>
		</div>
		</form>
		</div>
	);
};

function error(){
	return(
		<div className="alert">
		Please Enter City and Country
		</div>
	);
}

export default form;

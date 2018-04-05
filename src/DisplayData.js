import React from 'react';
import Button from 'material-ui/Button';
import axios from 'axios';
import TextField from 'material-ui/TextField';

class DisplayData extends React.Component {
	constructor() {
		super();
		this.state = {
			"HRdata": "No data requested yet",
			"UserEmail": "",
		};
	} 

	onNameTextFieldChange = (event) => {
		this.setState({"UserEmail": event.target.value});
	}

	fetchData = () => {
		axios.get("http://vcm-3584.vm.duke.edu:5000/api/heart_rate/ps178@duke.edu").then( (response) => {
			console.log(response.status);
			this.setState({"HRdata": JSON.stringify(response.data)});
		});
	}

	onButtonClick = (event) => {
		console.log(this.state.UserEmail);
	}

	render() {
		return (
				<div>
				    <TextField
				        value={this.state.UserEmail}
					onChange={this.onNameTextFieldChange}/>
				    <Button onClick={this.fetchData}>
				        Get Data
				    </Button>
				 
				    {this.state.HRdata}
				</div>
			);
	}
}

export default DisplayData

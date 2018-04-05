import React from 'react';
import Hello from './Hello.js';
import DisplayData from './DisplayData.js';

class App extends React.Component {
	render() {
		return (
				<div>
				<Hello />
				Enter user email below:
				<DisplayData />
				</div>
			);
	}
}

export default App;


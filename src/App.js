import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Display from "./Display"

class App extends Component {
	render() {
		return (
			<div>
				<table className="currencyTable">
					<Display/>
				</table>
			</div>
		)
	}
}

export default App;
import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import { Display } from "./Display"
import { Currency } from "./Currency"

export class App extends Component {
	constructor(props) {
	super(props);

	this.state = {
		currencies:
	    [
	      {
	  			currencyName: "BTC",
	  			usdValue: "$100.01"
	  		},
	  		{
	  			currencyName: "ETH",
	  			usdValue: "$100.01"
	  		}
	    ]
	}
}

	render() {
		return (
			<div>
				<Display currencies={this.state.currencies}/>
			</div>
		)
	}
}

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Currency from './Currency'

class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currencies: []
    }

  }

  render() {
    return (
      <tbody className="display">
        <Currency/>
      </tbody>
    )
  }

}

export default Display;

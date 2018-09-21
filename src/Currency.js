import React, { Component } from "react";
import ReactDOM from "react-dom";

class Currency extends React.Component {

  render() {
    return (
      <tr className="currency">
        <td className="entryName"> Currency Name </td>
        <td className="usdValue"> &dollar;USD Value </td>
        <td className="manageEntry"><button className="deleteBtn">delete</button></td>
      </tr>
    )
  }

  createCurrency() {

  }

  updateCurrencies() {

  }

  deleteCurrency() {

  }

}

export default Currency;

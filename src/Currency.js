import React, { Component } from "react";
import ReactDOM from "react-dom";

export const Currency = ({currencyName, usdValue}) => (
  <tr className="currency">
    <td className="currencyName"> { currencyName } </td>
    <td className="usdValue"> { usdValue } </td>
    <td className="manageCurrency"><button className="deleteBtn">delete</button></td>
  </tr>
)
